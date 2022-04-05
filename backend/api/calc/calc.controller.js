const logger = require('../../services/logger.service');

class Calculator {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.color = 'black';
  }

  doCalc = async (req, res) => {
    try {
      const data = req.body;
      this.num1 = data.input1;
      this.num2 = data.input2;
      res.json(this[data.operator]());
      logger.info('calculate, inputs:', inputs);
    } catch (err) {
      logger.error('Failed to calculate', err);
      res.status(500).send({ err: 'Failed to add calculate' });
    }
  };

  add() {
    return { result: this.num1 + this.num2 };
  }
  sub() {
    return { result: this.num1 - this.num2 };
  }
  mul() {
    return { result: this.num1 * this.num2 };
  }
  div() {
    return { result: this.num1 / this.num2 };
  }
  power() {
    return { result: this.num1 ** this.num2 };
  }

  getColor() {
    //do logic
    this.color = 'someColor';
  }
}

module.exports = {
  Calculator,
};
