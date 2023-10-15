// Import packages
import { Router } from 'express';
import { GetInfo, PostInfo, apiIndex} from '../controllers';



const routes = Router();

/*************************************************************************
API CALL START
*************************************************************************/

// INDEX ROUTE TO SHOW API IS WORKING FINE.

routes.get('/', apiIndex);
routes.post("send-info", PostInfo)
routes.post("get-info", GetInfo)





export default routes;
