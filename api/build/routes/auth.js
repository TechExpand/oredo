"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import packages
const express_1 = require("express");
const controllers_1 = require("../controllers");
const auth_1 = require("../controllers/auth");
const routes = (0, express_1.Router)();
/*************************************************************************
API CALL START
*************************************************************************/
// INDEX ROUTE TO SHOW API IS WORKING FINE.
routes.post('/add-user', auth_1.addUser);
routes.post('/create-market', controllers_1.AddMarkets);
routes.post('/remove-market', controllers_1.deleteMarkets);
routes.post('/remove-user', auth_1.deleteUser);
routes.post('/update-user', auth_1.updateUser);
routes.post('/login', auth_1.login);
routes.get('/get-user', auth_1.getUser);
exports.default = routes;
//# sourceMappingURL=auth.js.map