"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const configSetup_1 = __importDefault(require("./config/configSetup"));
const db_1 = require("./controllers/db");
const index_1 = __importDefault(require("./routes/index"));
const auth_1 = __importDefault(require("./routes/auth"));
// import wallet from "./routes/wallet";
// import { isAuthorized } from './middlewares/authorise';
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
// PARSE JSON
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// ENABLE CORS AND START SERVER
app.use((0, cors_1.default)({ origin: true }));
(0, db_1.initDB)();
app.listen(configSetup_1.default.PORT || 8000, () => {
    console.log(`Server started on port ${configSetup_1.default.PORT || 8000}...`);
});
// Routes
// app.all('*', isAuthorized);
app.use("/api", index_1.default);
app.use("/api", auth_1.default);
//# sourceMappingURL=app.js.map