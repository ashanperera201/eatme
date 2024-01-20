"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDto = void 0;
class ResponseDto {
    constructor(response, status, isSuccess, errors) {
        this.response = response;
        this.status = status;
        this.isSuccess = isSuccess;
        this.errors = errors;
    }
}
exports.ResponseDto = ResponseDto;
//# sourceMappingURL=response.dto.js.map