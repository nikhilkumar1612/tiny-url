require('dotenv').config();
const dbInit = require("./loaders/database");
const expressInit = require("./loaders/express");

const serve = () => {
    console.log("trying to start server");
    dbInit();
    expressInit();
}

serve();

// const temp = () => {
//     console.log("nikhil");
// }
// temp();