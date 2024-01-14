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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMarkets = exports.AddMarkets = exports.GetMarkets = exports.GetInfo = exports.PostInfo = exports.apiIndex = void 0;
const utility_1 = require("../helpers/utility");
const Info_1 = require("../models/Info");
const Details_1 = require("../models/Details");
const upload_1 = require("../helpers/upload");
const Market_1 = require("../models/Market");
const fs = require("fs");
const path = require("path");
const apiIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, utility_1.successResponse)(res, 'API Working!'); });
exports.apiIndex = apiIndex;
const PostInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { marketId, spaceCategory, storeType, noOfShops, typeOfAllotee, detail } = req.body;
    const info = yield Info_1.Info.create({ marketId, spaceCategory, storeType, noOfShops, typeOfAllotee });
    let uploaded_url = [];
    let newFile = [];
    if (((_a = req.files) === null || _a === void 0 ? void 0 : _a.length) != 0) {
        newFile = newFile.concat(req.files);
        console.log(newFile);
        for (let file of newFile) {
            const result = yield (0, upload_1.upload_cloud)(file.path.replace(/ /g, "_"));
            uploaded_url.push(result.secure_url);
        }
        let newData = [];
        let index = 0;
        for (let value of detail) {
            newData.push({
                infoId: info.id, fullname: value.fullname, phoneNum: value.phoneNum,
                address: value.address, typeOfItemSold: value.typeOfItemSold,
                itemWorth: value.itemWorth,
                comment: value.comment, image: uploaded_url[index]
            });
            index++;
        }
        const details = yield Details_1.Details.bulkCreate(newData);
        fs.readdir("./image", (err, files) => {
            if (err)
                throw err;
            for (const file of files) {
                fs.unlink(path.join("./image", file), (err) => {
                    if (err)
                        throw err;
                });
            }
        });
        (0, utility_1.successResponse)(res, "Successful", { info, details });
    }
});
exports.PostInfo = PostInfo;
const GetInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { marketId } = req.query;
    const info = yield Info_1.Info.findAll({ where: { marketId },
        include: [{ model: Details_1.Details,
                attributes: [
                    'createdAt', 'updatedAt', "fullname", "phoneNum", "address", "typeOfItemSold", "itemWorth", "comment", "image", "id"
                ] }
        ],
    });
    (0, utility_1.successResponse)(res, "Successful", info);
});
exports.GetInfo = GetInfo;
const GetMarkets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const market = yield Market_1.Market.findAll({});
    (0, utility_1.successResponse)(res, "Successful", market);
});
exports.GetMarkets = GetMarkets;
const AddMarkets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.query;
    const market = yield Market_1.Market.create({ name });
    (0, utility_1.successResponse)(res, "Successful", market);
});
exports.AddMarkets = AddMarkets;
const deleteMarkets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    const market = yield Market_1.Market.findOne({ where: { id } });
    yield (market === null || market === void 0 ? void 0 : market.destroy());
    (0, utility_1.successResponse)(res, "Successful", market);
});
exports.deleteMarkets = deleteMarkets;
//# sourceMappingURL=index.js.map