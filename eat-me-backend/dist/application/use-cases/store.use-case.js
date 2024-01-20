"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStoreData = void 0;
const ajv_1 = __importDefault(require("ajv"));
const store_schema_json_1 = __importDefault(require("../schemas/store.schema.json"));
const ajv = new ajv_1.default();
const validateStore = ajv.compile(store_schema_json_1.default);
const validateStoreData = (store) => {
    const isValid = validateStore(store);
    if (!isValid) {
        console.error(validateStore.errors);
    }
    return isValid;
};
exports.validateStoreData = validateStoreData;
//# sourceMappingURL=store.use-case.js.map