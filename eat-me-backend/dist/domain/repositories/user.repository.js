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
exports.userRepository = void 0;
const user_1 = require("../models/user");
class UserRepository {
    constructor() {
        this.createUserAsync = (userData) => __awaiter(this, void 0, void 0, function* () {
            let transaction = null;
            try {
                transaction = yield user_1.User.sequelize.transaction();
                const createdUser = yield user_1.User.create(userData, { transaction });
                yield transaction.commit();
                return createdUser;
            }
            catch (error) {
                if (transaction)
                    yield transaction.rollback();
                throw error;
            }
        });
    }
}
exports.userRepository = new UserRepository();
//# sourceMappingURL=user.repository.js.map