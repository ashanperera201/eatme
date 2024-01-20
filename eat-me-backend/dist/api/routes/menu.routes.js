"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menu_controller_1 = require("../controllers/menu.controller");
const expressRef = express_1.default;
const router = expressRef.Router();
router.get('/dish/item-category/', menu_controller_1.getAllDishItemCategoriesAsync);
// router.get('/version', getApiVersion);
exports.default = router;
//# sourceMappingURL=menu.routes.js.map