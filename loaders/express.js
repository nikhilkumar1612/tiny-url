const express = require("express");
const createRouter = require("../router/creator");
const resolveRouter = require("../router/resolver");

const expressInit = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/", createRouter);
    app.use("/", resolveRouter);

    app.listen(3000, () => {
        console.log(`server started at port 3000`);
    });
    return app;
}

module.exports = expressInit;