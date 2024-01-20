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
exports.orderService = void 0;
const status_code_enum_1 = require("status-code-enum");
const order_use_case_1 = require("../use-cases/order.use-case");
const response_dto_1 = require("../../domain/dto/response.dto");
const order_repository_1 = require("../../domain/repositories/order.repository");
class OrderService {
    constructor() {
        this.createOrderAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            const validated = (0, order_use_case_1.validateDto)(data);
            if (validated) {
                const storeRes = yield order_repository_1.ordersRepository.saveOrderAsync(data);
                return new response_dto_1.ResponseDto(storeRes, status_code_enum_1.StatusCode.SuccessOK, true, []);
            }
            return new response_dto_1.ResponseDto(null, status_code_enum_1.StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
        });
        this.updateOrderAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            const validated = (0, order_use_case_1.validateDto)(data);
            if (validated) {
                const storeRes = yield order_repository_1.ordersRepository.updateOrderAsync(data);
                return new response_dto_1.ResponseDto(storeRes, status_code_enum_1.StatusCode.SuccessOK, true, []);
            }
            return new response_dto_1.ResponseDto(null, status_code_enum_1.StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
        });
        this.getOrderByIdAsync = (id) => __awaiter(this, void 0, void 0, function* () {
            const order = yield order_repository_1.ordersRepository.getOrderByIdAsync(id);
            return new response_dto_1.ResponseDto(order, status_code_enum_1.StatusCode.SuccessOK, true, []);
        });
        this.deleteOrderAsync = (order) => __awaiter(this, void 0, void 0, function* () {
            const status = yield order_repository_1.ordersRepository.deleteOrder(order);
            return new response_dto_1.ResponseDto(order, status_code_enum_1.StatusCode.SuccessOK, true, []);
        });
    }
}
exports.orderService = new OrderService();
//# sourceMappingURL=order.service.js.map