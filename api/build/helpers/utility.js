"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomRef = exports.validateEmail = exports.randomId = exports.errorResponse = exports.successResponse = exports.handleResponse = exports.saltRounds = exports.TOKEN_SECRET = void 0;
exports.TOKEN_SECRET = "222hwhdhnnjduru838272@@$henncndbdhsjj333n33brnfn";
exports.saltRounds = 10;
const handleResponse = (res, statusCode, status, message, data) => {
    return res.status(statusCode).json({
        status,
        message,
        data,
    });
};
exports.handleResponse = handleResponse;
const successResponse = (res, message = 'Operation successfull', data) => {
    return res.status(200).json({
        status: true,
        message,
        data,
    });
};
exports.successResponse = successResponse;
const errorResponse = (res, message = 'An error occured', data) => {
    return res.status(400).json({
        status: false,
        message,
        data,
    });
};
exports.errorResponse = errorResponse;
const randomId = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
};
exports.randomId = randomId;
const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
exports.validateEmail = validateEmail;
const createRandomRef = (length, initial) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `${initial}_${result}`;
};
exports.createRandomRef = createRandomRef;
//# sourceMappingURL=utility.js.map