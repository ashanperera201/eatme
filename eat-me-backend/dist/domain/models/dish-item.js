"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishItem = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../infrastructure/database/sequelize"));
class DishItem extends sequelize_1.Model {
}
exports.DishItem = DishItem;
DishItem.init({
    itemName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    itemDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    itemPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.default,
    modelName: 'DishItem',
});
//# sourceMappingURL=dish-item.js.map