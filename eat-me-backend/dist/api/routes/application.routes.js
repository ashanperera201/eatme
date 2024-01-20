"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applications_controller_1 = require("../controllers/applications.controller");
const expressRef = express_1.default;
const router = expressRef.Router();
router.get('/greetings', applications_controller_1.greetings);
router.get('/version', applications_controller_1.getApiVersion);
exports.default = router;
//# sourceMappingURL=application.routes.js.map