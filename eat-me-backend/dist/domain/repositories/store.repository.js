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
exports.storeRepository = void 0;
const store_1 = require("../models/store");
class StoreRepository {
    constructor() {
        this.saveStoreAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            let transaction = null;
            try {
                transaction = yield store_1.Store.sequelize.transaction();
                const response = yield store_1.Store.create(data, { transaction });
                yield transaction.commit();
                return response;
            }
            catch (error) {
                if (transaction)
                    yield transaction.rollback();
                throw error;
            }
        });
        this.updateStoreAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            let transaction = null;
            try {
                transaction = yield store_1.Store.sequelize.transaction();
                const response = yield store_1.Store.update(data, {
                    where: { id: data.id },
                    returning: true,
                    transaction,
                });
                yield transaction.commit();
                return response[1][0];
            }
            catch (error) {
                if (transaction)
                    yield transaction.rollback();
                throw error;
            }
        });
        this.getStoreByIdAsync = (store) => __awaiter(this, void 0, void 0, function* () {
            const response = yield store_1.Store.findOne({ where: { storeName: store } });
            return response;
        });
        this.deleteStoreAsync = (store) => __awaiter(this, void 0, void 0, function* () {
            let transaction = null;
            try {
                transaction = yield store_1.Store.sequelize.transaction();
                const deletedRowsCount = yield store_1.Store.destroy({
                    where: { id: store.id },
                    transaction,
                });
                if (deletedRowsCount === 0) {
                    throw new Error('Store not found.');
                }
                yield transaction.commit();
                return true;
            }
            catch (error) {
                if (transaction)
                    yield transaction.rollback();
                throw error;
            }
        });
    }
}
exports.storeRepository = new StoreRepository();
//# sourceMappingURL=store.repository.js.map