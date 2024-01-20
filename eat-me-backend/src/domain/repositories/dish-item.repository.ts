import { Transaction, } from 'sequelize';
import { DishItem, DishItemAttributes } from '../models/dish-item';

class DishItemRepository {

    saveDishItemAsync = async (data: DishItemAttributes): Promise<DishItemAttributes> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await DishItem.sequelize.transaction();
            const response = await DishItem.create(data, { transaction });
            await transaction.commit();
            return response;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }

    updateDishItemAsync = async (data: DishItemAttributes): Promise<DishItemAttributes> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await DishItem.sequelize.transaction();
            const response = await DishItem.update(data, {
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

    getDishItemsAsync = async (page: number = 1, pageSize: number = 10): Promise<DishItemAttributes[]> => {
        const offset = (page - 1) * pageSize;
        const response = await DishItem.findAll({ offset, limit: pageSize });
        return response;
    }

    getDishItemByIdAsync = async (id: number): Promise<DishItemAttributes> => {
        const response = await DishItem.findByPk(id);
        return response;
    }

    deleteDishItem = async (data: DishItemAttributes): Promise<boolean> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await DishItem.sequelize.transaction();
            const deletedRowsCount = await DishItem.destroy({
                where: { id: data.id },
                transaction,
            });

            if (deletedRowsCount === 0) {
                throw new Error('Dish Item not found.');
            }

            await transaction.commit();
            return true;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }
}

export const dishItemRepository = new DishItemRepository();
