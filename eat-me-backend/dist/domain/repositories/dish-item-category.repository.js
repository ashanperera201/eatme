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
exports.dishItemCategoryRepository = void 0;
const dish_item_category_1 = require("../models/dish-item-category");
class DishItemCategoryRepository {
    constructor() {
        this.saveDishItemCategoryAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            let transaction = null;
            try {
                transaction = yield dish_item_category_1.DishItemCategory.sequelize.transaction();
                const response = yield dish_item_category_1.DishItemCategory.create(data, { transaction });
                yield transaction.commit();
                return response;
            }
            catch (error) {
                if (transaction)
                    yield transaction.rollback();
                throw error;
            }
        });
        this.updateDishItemCategoryAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            let transaction = null;
            try {
                transaction = yield dish_item_category_1.DishItemCategory.sequelize.transaction();
                const response = yield dish_item_category_1.DishItemCategory.update(data, {
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
        this.getDishItemCategoryByIdAsync = (id) => __awaiter(this, void 0, void 0, function* () {
            const response = yield dish_item_category_1.DishItemCategory.findByPk(id);
            return response;
        });
        this.getDishItemCategoriesAsync = (page = 1, pageSize = 10) => __awaiter(this, void 0, void 0, function* () {
            const offset = (page - 1) * pageSize;
            const response = yield dish_item_category_1.DishItemCategory.findAll({ offset, limit: pageSize });
            return response;
        });
        this.deleteDishItemCategoryAsync = (data) => __awaiter(this, void 0, void 0, function* () {
            let transaction = null;
            try {
                transaction = yield dish_item_category_1.DishItemCategory.sequelize.transaction();
                const deletedRowsCount = yield dish_item_category_1.DishItemCategory.destroy({
                    where: { id: data.id },
                    transaction,
                });
                if (deletedRowsCount === 0) {
                    throw new Error('Dish item category is not found.');
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
exports.dishItemCategoryRepository = new DishItemCategoryRepository();
//# sourceMappingURL=dish-item-category.repository.js.map