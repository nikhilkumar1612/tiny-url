const {MD5} = require("crypto-js");
const joi = require("joi");
const models = require("../models/index");
const db = require("../utils/database");
const { encode62 } = require("../utils/encode");

const create = async (req, res) => {
    try {
        const schema = joi.object({
            url: joi.string().uri().required()
        });

        const {error, value} = schema.validate(req.body);

        if(error) {
            return res.status(400).json({
                error: "Invalid URL requested"
            })
        }

        const originalUrl = value.url;

        const row = await models.Url.findOne({
            where: {
                originalUrl
            }
        });

        if(row) {
            return res.status(400).json({
                error: `Url already exists`,
                hash: row.hash
            });
        }

        const hash = MD5(originalUrl).toString();

        const bigHash = BigInt(`0x${hash}`);
        const base62EncodedHash = encode62(bigHash).slice(0, 7);

        const transaction = await db.transaction();
        const result = await models.Url.create(
            {originalUrl: originalUrl, hash: base62EncodedHash},
            {transaction}
        );
        await transaction.commit();

        return res.status(200).json({
            success: true,
            tinyurl: `http://localhost:3000/${base62EncodedHash}`
        })
    } catch (error) {
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
}

module.exports = {
    create
}