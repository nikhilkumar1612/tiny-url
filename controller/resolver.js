const models = require("../models/index");

const resolve = async (req, res) => {
    try {
        const hash = req.params.hash;

        const row = await models.Url.findOne({
            where: {
                hash
            }
        });

        if(!row) {
            return res.status(400).json({
                error: "Invalid hash"
            });
        }

        return res.redirect(row.originalUrl);
    } catch (error) {
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

module.exports = {
    resolve
}