import { TOKEN_SECRET, createRandomRef, errorResponse, randomId, saltRounds, successResponse, validateEmail } from "../helpers/utility";
import { Request, Response } from 'express';
import { sendEmail, sendSMS } from "../services/sms";
import { Op, where } from "sequelize";
import { UserState, Users } from "../models/Users";
import {compare, hash} from "bcryptjs";
import {sign} from "jsonwebtoken";
import { upload_cloud } from "../helpers/upload";




export const login = async (req: Request, res: Response)=>{
    let { email } = req.body;
    const user = await Users.findOne({ where:{ email }})
    if (!user) return errorResponse(res, "Failed", {status: false, message: "Agent does not exist"})
    return successResponse(res, "Successful", {status: true})
}





export const addUser = async (req: Request, res: Response)=>{
  let { email } = req.query;
  let findUser = await Users.findOne({where:{email}})
  if(findUser) return successResponse(res, "Agent Already Added")
  const user = await Users.create({ email})
  return successResponse(res, "Successful", user)
}



export const getUser = async (req: Request, res: Response)=>{
  const user = await Users.findAll({ })
  return successResponse(res, "Successful", user)
}



export const deleteUser = async (req: Request, res: Response)=>{
  let { id } = req.query;
  const user = await Users.findOne({ where:{ id }})
  await user?.destroy()
  return successResponse(res, "Agent Removed", user)
}





export const updateUser = async (req: Request, res: Response)=>{
  let { email, status } = req.query;
  const user = await Users.findOne({ where:{ email }})
  await user?.update({status})
  return successResponse(res, "Agent Removed", user)
}
