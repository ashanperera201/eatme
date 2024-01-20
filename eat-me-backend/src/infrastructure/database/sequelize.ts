import { Sequelize } from "sequelize";

const sequelize = new Sequelize('eat_me', 'root', 'pass#word123', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;