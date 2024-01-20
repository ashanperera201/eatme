import { DataTypes, Model } from 'sequelize';
import sequelize from '../../infrastructure/database/sequelize';

interface DishItemCategoryAttributes {
    id?: number;
    categoryName: string;
    categoryDescription: string;
    dishItems: any[];
}

class DishItemCategory extends Model<DishItemCategoryAttributes> implements DishItemCategoryAttributes {
    id?: number;
    categoryName: string;
    categoryDescription: string;
    dishItems: any[];
}

DishItemCategory.init(
    {
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryDescription: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dishItems: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'DishItemCategory',
    }
);

export { DishItemCategory, DishItemCategoryAttributes }