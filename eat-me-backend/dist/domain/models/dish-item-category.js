"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishItemCategory = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../infrastructure/database/sequelize"));
class DishItemCategory extends sequelize_1.Model {
}
exports.DishItemCategory = DishItemCategory;
DishItemCategory.init({
    categoryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    categoryDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    dishItems: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: sequelize_2.default,
    modelName: 'DishItemCategory',
});
//# sourceMappingURL=dish-item-category.js.map