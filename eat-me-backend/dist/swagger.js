"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'EAT ME BACKEND',
            version: '1.0.0',
            description: 'Eat me docs',
        },
    },
    apis: ['./api/routes/*.ts'],
};
exports.specs = (0, swagger_jsdoc_1.default)(options);
//# sourceMappingURL=swagger.js.map