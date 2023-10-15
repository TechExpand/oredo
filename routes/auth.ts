




// Import packages
import { Router } from 'express';
import { apiIndex } from '../controllers';
import { uploads } from '../helpers/upload';
import { addUser, deleteUser, getUser, login, updateUser } from '../controllers/auth';


const routes = Router();

/*************************************************************************
API CALL START
*************************************************************************/

// INDEX ROUTE TO SHOW API IS WORKING FINE.
routes.post('/add-user', addUser);
routes.post('/remove-user', deleteUser);
routes.post('/update-user', updateUser);
routes.post('/login', login);
routes.get('get-user', getUser);



export default routes;
