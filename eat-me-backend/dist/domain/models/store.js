"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../infrastructure/database/sequelize"));
class Store extends sequelize_1.Model {
}
exports.Store = Store;
Store.init({
    storeName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    storeDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    openingTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    closingTime: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    reviews: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.default,
    modelName: 'Store',
});
//# sourceMappingURL=store.js.map