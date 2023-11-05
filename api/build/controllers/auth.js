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
exports.updateUser = exports.deleteUser = exports.getUser = exports.addUser = exports.login = void 0;
const utility_1 = require("../helpers/utility");
const Users_1 = require("../models/Users");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email } = req.body;
    const user = yield Users_1.Users.findOne({ where: { email } });
    if (!user)
        return (0, utility_1.errorResponse)(res, "Failed", { status: false, message: "Agent does not exist" });
    return (0, utility_1.successResponse)(res, "Successful", { status: true });
});
exports.login = login;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email } = req.query;
    const user = yield Users_1.Users.create({ email });
    return (0, utility_1.successResponse)(res, "Successful", user);
});
exports.addUser = addUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Users_1.Users.findAll({});
    return (0, utility_1.successResponse)(res, "Successful", user);
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.query;
    const user = yield Users_1.Users.findOne({ where: { id } });
    yield (user === null || user === void 0 ? void 0 : user.destroy());
    return (0, utility_1.successResponse)(res, "Agent Removed", user);
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, status } = req.query;
    const user = yield Users_1.Users.findOne({ where: { email } });
    yield (user === null || user === void 0 ? void 0 : user.update({ status }));
    return (0, utility_1.successResponse)(res, "Agent Removed", user);
});
exports.updateUser = updateUser;
//# sourceMappingURL=auth.js.map