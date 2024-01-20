import { DataTypes, Model } from 'sequelize';
import sequelize from '../../infrastructure/database/sequelize';

interface StoreAttributes {
    id?: number;
    storeName: string;
    storeDescription: string;
    address: string;
    openingTime: string;
    closingTime: string;
    reviews: string;
}

class Store extends Model<StoreAttributes> implements StoreAttributes {
    id?: number;
    storeName: string;
    storeDescription: string;
    address: string;
    openingTime: string;
    closingTime: string;
    reviews: string;
}

Store.init(
    {
        storeName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        storeDescription: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        openingTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        closingTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reviews: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Store',
    }
);

export { Store, StoreAttributes }