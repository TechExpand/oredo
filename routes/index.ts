// Import packages
import { Router } from 'express';
import { GetInfo, GetMarkets, PostInfo, apiIndex} from '../controllers';
import { uploads } from '../helpers/upload';



const routes = Router();

/*************************************************************************
API CALL START
*************************************************************************/

// INDEX ROUTE TO SHOW API IS WORKING FINE.

routes.get('/', apiIndex);
routes.get('/get-market', GetMarkets);
routes.post("/send-info", uploads.array("image"), PostInfo)
routes.post("/get-info",  GetInfo)





export default routes;
