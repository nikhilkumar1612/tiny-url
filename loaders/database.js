const db = require("../utils/database");
const models = require("../models/index");

const dbInit = async () => {
    try {
        db.authenticate().then(() => {
            console.log("Connection to the database successful.");
        })
        .catch((error) => {
            console.log(
                "Database connection failed: ", 
                JSON.stringify(error, Object.getOwnPropertyNames(error))
            );
        });

        await models.Url.sync();
            
        console.log("Tables created successfully.");
    } catch (error) {
        console.log(
            JSON.stringify(error, Object.getOwnPropertyNames(error))
        );
    }
};

module.exports = dbInit;