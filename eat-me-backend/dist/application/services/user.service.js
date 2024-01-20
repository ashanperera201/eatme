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
exports.userService = void 0;
const status_code_enum_1 = require("status-code-enum");
const user_use_case_1 = require("../use-cases/user.use-case");
const response_dto_1 = require("../../domain/dto/response.dto");
const user_repository_1 = require("../../domain/repositories/user.repository");
class UserService {
    constructor() {
        this.createUserAsync = (user) => __awaiter(this, void 0, void 0, function* () {
            const validated = (0, user_use_case_1.validateUserData)(user);
            if (validated) {
                const { age, name, email } = yield user_repository_1.userRepository.createUserAsync(user);
                return new response_dto_1.ResponseDto({ age, name, email }, status_code_enum_1.StatusCode.SuccessOK, true, []);
            }
            return new response_dto_1.ResponseDto(null, status_code_enum_1.StatusCode.ClientErrorBadRequest, false, ['Check the user model again.']);
        });
    }
}
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map