import { DataTypes, Model } from 'sequelize';
import sequelize from '../../infrastructure/database/sequelize';

interface DishItemAttributes {
    id?: number;
    itemName: string;
    itemDescription: string;
    itemPrice: number;
}

class DishItem extends Model<DishItemAttributes> implements DishItemAttributes {
    id?: number;
    itemName: string;
    itemDescription: string;
    itemPrice: number;
}

DishItem.init(
    {
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        itemDescription: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        itemPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'DishItem',
    }
);

export { DishItem, DishItemAttributes }