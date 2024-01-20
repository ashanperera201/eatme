import { DataTypes, Model } from 'sequelize';
import sequelize from '../../infrastructure/database/sequelize';

interface OrdersAttributes {
    id?: number;
    orderItem: string;
    quantity: number;
    totalPrice: number;
    timeStamp: Date;
}

class Orders extends Model<OrdersAttributes> implements OrdersAttributes {
    id?: number;
    orderItem: string;
    quantity: number;
    totalPrice: number;
    timeStamp: Date;

}

Orders.init(
    {
        orderItem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        timeStamp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Order',
    }
);

export { Orders, OrdersAttributes }