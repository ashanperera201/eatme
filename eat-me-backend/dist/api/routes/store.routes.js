"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const store_controller_1 = require("../controllers/store.controller");
const expressRef = express_1.default;
const router = expressRef.Router();
router.post('', store_controller_1.createStoreAsync);
router.put('', store_controller_1.updateStoreAsync);
router.get('/:store', store_controller_1.getStoreByIdAsync);
router.post('/delete', store_controller_1.deleteStoreAsync);
exports.default = router;
//# sourceMappingURL=store.routes.js.map