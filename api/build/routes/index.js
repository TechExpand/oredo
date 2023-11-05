"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import packages
const express_1 = require("express");
const controllers_1 = require("../controllers");
const upload_1 = require("../helpers/upload");
const routes = (0, express_1.Router)();
/*************************************************************************
API CALL START
*************************************************************************/
// INDEX ROUTE TO SHOW API IS WORKING FINE.
routes.get('/', controllers_1.apiIndex);
routes.get('/get-market', controllers_1.GetMarkets);
routes.post("/send-info", upload_1.uploads.array("image"), controllers_1.PostInfo);
routes.get("/get-info", controllers_1.GetInfo);
exports.default = routes;
//# sourceMappingURL=index.js.map