import { Transaction } from 'sequelize';
import { User, UserAttributes } from '../models/user';

class UserRepository {
    createUserAsync = async (userData: UserAttributes): Promise<User> => {
        let transaction: Transaction | null = null;

        try {
            transaction = await User.sequelize.transaction();
            const createdUser = await User.create(userData, { transaction });
            await transaction.commit();
            return createdUser;
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw error;
        }
    }
}

export const userRepository = new UserRepository();