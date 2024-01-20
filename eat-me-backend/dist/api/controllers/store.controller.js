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
exports.deleteStoreAsync = exports.getStoreByIdAsync = exports.updateStoreAsync = exports.createStoreAsync = void 0;
const store_service_1 = require("../../application/services/store.service");
const createStoreAsync = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const savedRes = yield store_service_1.storeService.createStoreAsync(payload);
    res.status(savedRes.status).json(savedRes);
});
exports.createStoreAsync = createStoreAsync;
const updateStoreAsync = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const savedRes = yield store_service_1.storeService.updateStoreAsync(payload);
    res.status(savedRes.status).json(savedRes);
});
exports.updateStoreAsync = updateStoreAsync;
const getStoreByIdAsync = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const store = req.params.store;
    const savedRes = yield store_service_1.storeService.getStoreAsync(store);
    res.status(savedRes.status).json(savedRes);
});
exports.getStoreByIdAsync = getStoreByIdAsync;
const deleteStoreAsync = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const response = yield store_service_1.storeService.deleteStoreAsync(payload);
    res.status(response.status).json(response);
});
exports.deleteStoreAsync = deleteStoreAsync;
//# sourceMappingURL=store.controller.js.map