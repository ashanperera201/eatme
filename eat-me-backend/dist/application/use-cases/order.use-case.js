"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDto = void 0;
const ajv_1 = __importDefault(require("ajv"));
const order_schema_json_1 = __importDefault(require("../schemas/order.schema.json"));
const ajv = new ajv_1.default();
const validateOrderItem = ajv.compile(order_schema_json_1.default);
const validateDto = (dishItem) => {
    const isValid = validateOrderItem(dishItem);
    if (!isValid) {
        console.error(validateOrderItem.errors);
    }
    return isValid;
};
exports.validateDto = validateDto;
//# sourceMappingURL=order.use-case.js.map