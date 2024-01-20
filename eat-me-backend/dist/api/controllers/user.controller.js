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
exports.createUserAsync = void 0;
const user_service_1 = require("../../application/services/user.service");
const createUserAsync = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = { age: req.body.age, email: req.body.email, name: req.body.name };
    const savedResponse = yield user_service_1.userService.createUserAsync(payload);
    res.status(savedResponse.status).json(savedResponse);
});
exports.createUserAsync = createUserAsync;
//# sourceMappingURL=user.controller.js.map