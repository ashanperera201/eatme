import { Transaction, where } from 'sequelize';
import { Store, StoreAttributes } from '../models/store';

class StoreRepository {

    saveStoreAsync = async (data: StoreAttributes): Promise<Store> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await Store.sequelize.transaction();
            const response = await Store.create(data, { transaction });
            await transaction.commit();
            return response;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }

    updateStoreAsync = async (data: StoreAttributes): Promise<Store> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await Store.sequelize.transaction();
            const response = await Store.update(data, {
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

    getStoreByIdAsync = async (store: string): Promise<Store> => {
        const response = await Store.findOne({ where: { storeName: store } });
        return response;
    }


    deleteStoreAsync = async (store: StoreAttributes): Promise<boolean> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await Store.sequelize.transaction();
            const deletedRowsCount = await Store.destroy({
                where: { id: store.id },
                transaction,
            });

            if (deletedRowsCount === 0) {
                throw new Error('Store not found.');
            }

            await transaction.commit();
            return true;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }
}

export const storeRepository = new StoreRepository();