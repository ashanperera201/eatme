"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDishItemCategory = void 0;
const ajv_1 = __importDefault(require("ajv"));
const dish_tem_category_schema_json_1 = __importDefault(require("../schemas/dish-tem-category.schema.json"));
const ajv = new ajv_1.default();
const validateDishItem = ajv.compile(dish_tem_category_schema_json_1.default);
const validateDishItemCategory = (store) => {
    const isValid = validateDishItem(store);
    if (!isValid) {
        console.error(validateDishItem.errors);
    }
    return isValid;
};
exports.validateDishItemCategory = validateDishItemCategory;
//# sourceMappingURL=dish-item-category.use-case.js.map