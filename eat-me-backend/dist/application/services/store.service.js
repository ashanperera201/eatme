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
exports.storeService = void 0;
const status_code_enum_1 = require("status-code-enum");
const store_use_case_1 = require("../use-cases/store.use-case");
const response_dto_1 = require("../../domain/dto/response.dto");
const store_repository_1 = require("../../domain/repositories/store.repository");
class StoreService {
    constructor() {
        this.createStoreAsync = (store) => __awaiter(this, void 0, void 0, function* () {
            const validated = (0, store_use_case_1.validateStoreData)(store);
            if (validated) {
                const storeRes = yield store_repository_1.storeRepository.saveStoreAsync(store);
                return new response_dto_1.ResponseDto(storeRes, status_code_enum_1.StatusCode.SuccessOK, true, []);
            }
            return new response_dto_1.ResponseDto(null, status_code_enum_1.StatusCode.ClientErrorBadRequest, false, ['Check the store model again.']);
        });
        this.updateStoreAsync = (store) => __awaiter(this, void 0, void 0, function* () {
            const validated = (0, store_use_case_1.validateStoreData)(store);
            if (validated) {
                const storeRes = yield store_repository_1.storeRepository.updateStoreAsync(store);
                return new response_dto_1.ResponseDto(storeRes, status_code_enum_1.StatusCode.SuccessOK, true, []);
            }
            return new response_dto_1.ResponseDto(null, status_code_enum_1.StatusCode.ClientErrorBadRequest, false, ['Check the store model again.']);
        });
        this.getStoreAsync = (store) => __awaiter(this, void 0, void 0, function* () {
            const storeRes = yield store_repository_1.storeRepository.getStoreByIdAsync(store);
            return new response_dto_1.ResponseDto(storeRes, storeRes ? status_code_enum_1.StatusCode.SuccessOK : status_code_enum_1.StatusCode.SuccessNoContent, true, []);
        });
        this.deleteStoreAsync = (store) => __awaiter(this, void 0, void 0, function* () {
            const storeRes = yield store_repository_1.storeRepository.deleteStoreAsync(store);
            return new response_dto_1.ResponseDto(storeRes, status_code_enum_1.StatusCode.SuccessOK, true, []);
        });
    }
}
exports.storeService = new StoreService();
//# sourceMappingURL=store.service.js.map