"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserData = void 0;
const ajv_1 = __importDefault(require("ajv"));
const user_schema_json_1 = __importDefault(require("../schemas/user.schema.json"));
const ajv = new ajv_1.default();
const validateUser = ajv.compile(user_schema_json_1.default);
const validateUserData = (userData) => {
    const isValid = validateUser(userData);
    if (!isValid) {
        console.error(validateUser.errors);
    }
    return isValid;
};
exports.validateUserData = validateUserData;
//# sourceMappingURL=user.use-case.js.map