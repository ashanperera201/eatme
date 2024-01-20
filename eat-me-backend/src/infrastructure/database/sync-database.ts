import sequelize from './sequelize';

const syncDatabase = async () => {
    try {
        await import('../../domain/models/store');
        await import('../../domain/models/user');
        await import('../../domain/models/dish-item');
        await import('../../domain/models/dish-item-category');
        await import('../../domain/models/orders');

        await sequelize.sync({ force: true });
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    } finally {
        await sequelize.close();
    }
}

syncDatabase();