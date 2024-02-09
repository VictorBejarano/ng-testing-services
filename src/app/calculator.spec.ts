import { Calculator } from './calculator';

describe('Test for calculator', () => {
  it('#multiply should return a number', () => {
    const calculator = new Calculator();
    const rta = calculator.multiply(3, 3);
    expect(rta).toEqual(9);
  });
});
