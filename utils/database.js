const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        operatorsAliases: 'false',
        logging: false,
    }
);

module.exports = sequelize;