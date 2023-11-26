const express = require('express');
const { resolve } = require('../controller/resolver');
const router = express.Router();

router.get("/:hash([0-9a-zA-Z]{7})", resolve);

module.exports = router;
