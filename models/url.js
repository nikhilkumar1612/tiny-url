const db = require("../utils/database");
const sequelize = require("sequelize");

const url = db.define("url", {
    id: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
    },
    originalUrl: {
        type: sequelize.STRING
    },
    hash: {
        type: sequelize.STRING
    }
});

module.exports = url;