"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Details = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Info_1 = require("./Info");
let Details = class Details extends sequelize_typescript_1.Model {
};
exports.Details = Details;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Info_1.Info),
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Details.prototype, "infoId", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(""),
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Details.prototype, "fullname", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(""),
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Details.prototype, "phoneNum", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(""),
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Details.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(""),
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Details.prototype, "typeOfItemSold", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(""),
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Details.prototype, "itemWorth", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(""),
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Details.prototype, "comment", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(""),
    (0, sequelize_typescript_1.AllowNull)(true),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Details.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Info_1.Info, { onDelete: 'CASCADE' }),
    __metadata("design:type", Info_1.Info)
], Details.prototype, "info", void 0);
exports.Details = Details = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'details' })
], Details);
//# sourceMappingURL=Details.js.map