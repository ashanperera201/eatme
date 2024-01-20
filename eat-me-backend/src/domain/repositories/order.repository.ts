import { Transaction } from 'sequelize';
import { Orders, OrdersAttributes } from '../models/orders';

class OrderRepository {

    saveOrderAsync = async (data: OrdersAttributes): Promise<OrdersAttributes> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await Orders.sequelize.transaction();
            const response = await Orders.create(data, { transaction });
            await transaction.commit();
            return response;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }

    updateOrderAsync = async (data: OrdersAttributes): Promise<OrdersAttributes> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await Orders.sequelize.transaction();
            const response = await Orders.update(data, {
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

    getOrderByIdAsync = async (orderId: number): Promise<OrdersAttributes> => {
        const response = await Orders.findByPk(orderId);
        return response;
    }

    deleteOrder = async (order: OrdersAttributes): Promise<boolean> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await Orders.sequelize.transaction();
            const deletedRowsCount = await Orders.destroy({
                where: { id: order.id },
                transaction,
            });

            if (deletedRowsCount === 0) {
                throw new Error('Order not found.');
            }

            await transaction.commit();
            return true;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }
}

export const ordersRepository = new OrderRepository();