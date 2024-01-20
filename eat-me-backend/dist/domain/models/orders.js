"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../../infrastructure/database/sequelize"));
class Orders extends sequelize_1.Model {
}
exports.Orders = Orders;
Orders.init({
    orderItem: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    totalPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    timeStamp: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: sequelize_2.default,
    modelName: 'Order',
});
//# sourceMappingURL=orders.js.map