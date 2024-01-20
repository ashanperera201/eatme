"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const application_routes_1 = __importDefault(require("./api/routes/application.routes"));
const user_routes_1 = __importDefault(require("./api/routes/user.routes"));
const store_routes_1 = __importDefault(require("./api/routes/store.routes"));
const menu_routes_1 = __importDefault(require("./api/routes/menu.routes"));
const swagger_1 = require("./swagger");
// Load environment variables from .env
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({ origin: { global: true } }));
// Application routes
app.use('/api/application', application_routes_1.default);
// User routes
app.use('/api/user', user_routes_1.default);
// Store routes
app.use('/api/store', store_routes_1.default);
// Menu routes
app.use('/api/menu', menu_routes_1.default);
// Swagger
app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.specs));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map