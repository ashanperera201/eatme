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
exports.dishItemService = void 0;
const status_code_enum_1 = require("status-code-enum");
const dish_item_use_case_1 = require("../use-cases/dish-item.use-case");
const response_dto_1 = require("../../domain/dto/response.dto");
const dish_item_repository_1 = require("../../domain/repositories/dish-item.repository");
class DishItemService {
    constructor() {
        this.createDishItemAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            const validated = (0, dish_item_use_case_1.validateDto)(data);
            if (validated) {
                const storeRes = yield dish_item_repository_1.dishItemRepository.saveDishItemAsync(data);
                return new response_dto_1.ResponseDto(storeRes, status_code_enum_1.StatusCode.SuccessOK, true, []);
            }
            return new response_dto_1.ResponseDto(null, status_code_enum_1.StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
        });
        this.updateDishItemAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            const validated = (0, dish_item_use_case_1.validateDto)(data);
            if (validated) {
                const storeRes = yield dish_item_repository_1.dishItemRepository.updateDishItemAsync(data);
                return new response_dto_1.ResponseDto(storeRes, status_code_enum_1.StatusCode.SuccessOK, true, []);
            }
            return new response_dto_1.ResponseDto(null, status_code_enum_1.StatusCode.ClientErrorBadRequest, false, ['Check the model again.']);
        });
    }
}
exports.dishItemService = new DishItemService();
//# sourceMappingURL=dish-item.service.js.map