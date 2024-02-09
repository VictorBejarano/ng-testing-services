import { Calculator } from './calculator';

fdescribe('Test for calculator', () => {
  it('#multiply should return a number', () => {
    const calculator = new Calculator();
    const rta = calculator.multiply(3, 3);
    expect(rta).toEqual(9);
  });
  it('#multiply should return a four', () => {
    const calculator = new Calculator();
    const rta = calculator.multiply(1, 4);
    expect(rta).toEqual(4);
  });
  it('#divide should return a some numbers', () => {
    const calculator = new Calculator();
    expect(calculator.divide(6, 3)).toEqual(2);
    expect(calculator.divide(5, 2)).toEqual(2.5);
  });
  it('#divide for a zero', () => {
    const calculator = new Calculator();
    expect(calculator.divide(6, 0)).toEqual(Infinity);
  });
  it('test matchers', () => {
    const name = 'victor';
    let name2;

    expect(name).toBeDefined();
    expect(name2).toBeUndefined();

    expect(1 + 3 === 4).toBeTruthy();
    expect(1 + 1 === 3).toBeFalsy();

    expect(5).toBeLessThan(10);
    expect(25).toBeGreaterThan(10);

    expect('12345').toMatch(/123/);

    expect(['apple', 'oranges', 'pears']).toContain('oranges');
  });
});
