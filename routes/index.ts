// Import packages
import { Router } from 'express';
import { GetInfo, PostInfo, apiIndex} from '../controllers';
import { uploads } from '../helpers/upload';



const routes = Router();

/*************************************************************************
API CALL START
*************************************************************************/

// INDEX ROUTE TO SHOW API IS WORKING FINE.

routes.get('/', apiIndex);
routes.post("/send-info", PostInfo)
routes.post("/get-info", uploads.array("image"), GetInfo)





export default routes;
