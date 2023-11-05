"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = exports.sequelize = void 0;
// Import packages
const sequelize_typescript_1 = require("sequelize-typescript");
// Import configs
const configSetup_1 = __importDefault(require("../config/configSetup"));
const Users_1 = require("../models/Users");
const Market_1 = require("../models/Market");
const Details_1 = require("../models/Details");
const Info_1 = require("../models/Info");
// // Import models
// import {
// } from './models';
const sequelize = new sequelize_typescript_1.Sequelize(configSetup_1.default.DBNAME, configSetup_1.default.DBUSERNAME, configSetup_1.default.DBPASSWORD, {
    host: configSetup_1.default.DBHOST,
    port: configSetup_1.default.DBPORT,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        ssl: { require: true, rejectUnauthorized: false },
    },
    models: [
        Users_1.Users,
        Market_1.Market,
        Details_1.Details,
        Info_1.Info
    ],
});
exports.sequelize = sequelize;
const initDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.authenticate();
    yield sequelize
        // .sync({})
        .sync({ alter: true })
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Database connected!');
    }))
        .catch(function (err) {
        console.log(err, 'Something went wrong with the Database Update!');
    });
});
exports.initDB = initDB;
//# sourceMappingURL=db.js.map