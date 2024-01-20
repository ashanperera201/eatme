"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDto = void 0;
const ajv_1 = __importDefault(require("ajv"));
const dish_item_schema_json_1 = __importDefault(require("../schemas/dish-item.schema.json"));
const ajv = new ajv_1.default();
const validateDishItem = ajv.compile(dish_item_schema_json_1.default);
const validateDto = (dishItem) => {
    const isValid = validateDishItem(dishItem);
    if (!isValid) {
        console.error(validateDishItem.errors);
    }
    return isValid;
};
exports.validateDto = validateDto;
//# sourceMappingURL=dish-item.use-case.js.map