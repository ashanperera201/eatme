"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiVersion = exports.greetings = void 0;
const greetings = (req, res) => {
    res.status(200).json(process.env.WELCOME_GREETINGS);
};
exports.greetings = greetings;
const getApiVersion = (req, res) => {
    res.status(200).json(process.env.API_VERSION);
};
exports.getApiVersion = getApiVersion;
//# sourceMappingURL=applications.controller.js.map