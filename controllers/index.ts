import { successResponse } from "../helpers/utility";
import { Request, Response } from 'express';
import { Info } from "../models/Info";
import { Details } from "../models/Details";
import { upload_cloud } from "../helpers/upload";


export const apiIndex = async (req: Request, res: Response) => successResponse(res, 'API Working!');


export const PostInfo  = async (req: Request, res: Response)=>{
    const {marketId, spaceCategory,
         storeType, noOfShops, typeOfAllotee, detail} = req.body;
    const info =  await Info.create({marketId, spaceCategory, storeType, noOfShops, typeOfAllotee});
    let uploaded_url:any = []
    let newFile:any = []
    if (req.files?.length != 0) {
        newFile = newFile.concat(req.files)
        console.log(newFile)
        for(let file of newFile){
            const result = await upload_cloud(file.path.replace(/ /g, "_"));
            uploaded_url.push(result.secure_url);
        }
        let newData:any[] = []
        let index = 0;
        for(let value of detail){
          newData.push({
              infoId: info.id, fullname: value.fullname, phoneNum: value.phoneNum,  
              address: value.address, typeOfItemSold: value.typeOfItemSold, itemWorth: value.itemWorth,
              comment: value.comment, image: uploaded_url[index]
          })
          index++;
        }
      const details = await Details.bulkCreate(newData)
      successResponse(res, "Successful", {info, details})
      }
}





export const GetInfo  = async (req: Request, res: Response)=>{
    const {marketId} = req.query
     const info =  await Info.findOne({where:{marketId},
        include: [{ model: Details, 
            attributes:  [
			  'createdAt', 'updatedAt',  "fullname", "phoneNum", "address", "typeOfItemSold", "itemWorth", "comment", "image"]  }
		    ],
    });
}


