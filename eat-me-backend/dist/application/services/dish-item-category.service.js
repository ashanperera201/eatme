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
exports.dishItemCategoryService = void 0;
const status_code_enum_1 = require("status-code-enum");
const dish_item_category_use_case_1 = require("../use-cases/dish-item-category.use-case");
const response_dto_1 = require("../../domain/dto/response.dto");
const dish_item_category_repository_1 = require("../../domain/repositories/dish-item-category.repository");
class DishItemCategoryService {
    constructor() {
        this.createDishItemCategoryAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            const validated = (0, dish_item_category_use_case_1.validateDishItemCategory)(data);
            if (validated) {
                const response = yield dish_item_category_repository_1.dishItemCategoryRepository.saveDishItemCategoryAsync(data);
                return new response_dto_1.ResponseDto(response, status_code_enum_1.StatusCode.SuccessOK, true, []);
            }
            return new response_dto_1.ResponseDto(null, status_code_enum_1.StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
        });
        this.updateDishItemCategoryAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            const validated = (0, dish_item_category_use_case_1.validateDishItemCategory)(data);
            if (validated) {
                const response = yield dish_item_category_repository_1.dishItemCategoryRepository.updateDishItemCategoryAsync(data);
                return new response_dto_1.ResponseDto(response, status_code_enum_1.StatusCode.SuccessOK, true, []);
            }
            return new response_dto_1.ResponseDto(null, status_code_enum_1.StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
        });
        this.getDishItemCategoryByIdAsync = (id) => __awaiter(this, void 0, void 0, function* () {
            const response = yield dish_item_category_repository_1.dishItemCategoryRepository.getDishItemCategoryByIdAsync(id);
            return new response_dto_1.ResponseDto(response, status_code_enum_1.StatusCode.SuccessOK, true, []);
        });
        this.getDishItemCategoriesAsync = (page, pageSize) => __awaiter(this, void 0, void 0, function* () {
            const response = yield dish_item_category_repository_1.dishItemCategoryRepository.getDishItemCategoriesAsync(page, pageSize);
            return new response_dto_1.ResponseDto(response);
        });
    }
}
exports.dishItemCategoryService = new DishItemCategoryService();
//# sourceMappingURL=dish-item-category.service.js.map