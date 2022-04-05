const express = require('express');
const { Calculator } = require('./calc.controller');
const router = express.Router();

const calculator = new Calculator();

router.post('/', calculator.doCalc);

module.exports = router;
