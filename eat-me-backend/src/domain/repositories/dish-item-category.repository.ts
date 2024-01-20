import { Transaction, } from 'sequelize';
import { DishItemCategory, DishItemCategoryAttributes } from '../models/dish-item-category';

class DishItemCategoryRepository {

    saveDishItemCategoryAsync = async (data: DishItemCategoryAttributes): Promise<DishItemCategoryAttributes> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await DishItemCategory.sequelize.transaction();
            const response = await DishItemCategory.create(data, { transaction });
            await transaction.commit();
            return response;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }

    updateDishItemCategoryAsync = async (data: DishItemCategoryAttributes): Promise<DishItemCategoryAttributes> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await DishItemCategory.sequelize.transaction();
            const response = await DishItemCategory.update(data, {
                where: { id: data.id },
                returning: true,
                transaction,
            });
            await transaction.commit();
            return response[1][0];
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }

    getDishItemCategoryByIdAsync = async (id: number): Promise<DishItemCategoryAttributes> => {
        const response = await DishItemCategory.findByPk(id);
        return response;
    }

    getDishItemCategoriesAsync = async (page: number = 1, pageSize: number = 10): Promise<DishItemCategoryAttributes[]> => {
        const offset = (page - 1) * pageSize;
        const response = await DishItemCategory.findAll({ offset, limit: pageSize });
        return response;
    }

    deleteDishItemCategoryAsync = async (data: DishItemCategoryAttributes): Promise<boolean> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await DishItemCategory.sequelize.transaction();
            const deletedRowsCount = await DishItemCategory.destroy({
                where: { id: data.id },
                transaction,
            });

            if (deletedRowsCount === 0) {
                throw new Error('Dish item category is not found.');
            }

            await transaction.commit();
            return true;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }
}

export const dishItemCategoryRepository = new DishItemCategoryRepository();
