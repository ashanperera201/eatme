import { DataTypes, Model } from 'sequelize';
import sequelize from '../../infrastructure/database/sequelize';


interface UserAttributes {
    id?: number;
    name: string;
    email: string;
    age: number;
}

class User extends Model<UserAttributes> implements UserAttributes {
    id?: number;
    name: string;
    email: string;
    age: number;
}

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'User',
    }
);

export { User, UserAttributes }