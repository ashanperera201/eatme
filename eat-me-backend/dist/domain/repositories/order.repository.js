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
exports.ordersRepository = void 0;
const orders_1 = require("../models/orders");
class OrderRepository {
    constructor() {
        this.saveOrderAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            let transaction = null;
            try {
                transaction = yield orders_1.Orders.sequelize.transaction();
                const response = yield orders_1.Orders.create(data, { transaction });
                yield transaction.commit();
                return response;
            }
            catch (error) {
                if (transaction)
                    yield transaction.rollback();
                throw error;
            }
        });
        this.updateOrderAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            let transaction = null;
            try {
                transaction = yield orders_1.Orders.sequelize.transaction();
                const response = yield orders_1.Orders.update(data, {
                    where: { id: data.id },
                    returning: true,
                    transaction,
                });
                yield transaction.commit();
                return response[1][0];
            }
            catch (error) {
                if (transaction)
                    yield transaction.rollback();
                throw error;
            }
        });
        this.getOrderByIdAsync = (orderId) => __awaiter(this, void 0, void 0, function* () {
            const response = yield orders_1.Orders.findByPk(orderId);
            return response;
        });
        this.deleteOrder = (order) => __awaiter(this, void 0, void 0, function* () {
            let transaction = null;
            try {
                transaction = yield orders_1.Orders.sequelize.transaction();
                const deletedRowsCount = yield orders_1.Orders.destroy({
                    where: { id: order.id },
                    transaction,
                });
                if (deletedRowsCount === 0) {
                    throw new Error('Order not found.');
                }
                yield transaction.commit();
                return true;
            }
            catch (error) {
                if (transaction)
                    yield transaction.rollback();
                throw error;
            }
        });
    }
}
exports.ordersRepository = new OrderRepository();
//# sourceMappingURL=order.repository.js.map