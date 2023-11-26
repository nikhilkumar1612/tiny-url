const express = require('express');
const { create } = require('../controller/creator');
const router = express.Router();

router.post('/create', create);

module.exports = router;