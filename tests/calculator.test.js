import Calculator from "../scripts/calculator";

describe("Calculator basic operations", () => {
  let calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  test("Addition: 2 + 2 = 4", () => {
    expect(calculator.add(2, 2)).toEqual(4);
  });

  test("Subtraction: 10 - 4 = 6", () => {
    expect(calculator.subtract(10, 4)).toEqual(6);
  });

  test("Multiply: 3 * 4 = 12", () => {
    expect(calculator.multiply(3, 4)).toEqual(12);
  });

  test("Division: 18 / 2 = 9", () => {
    expect(calculator.divide(18, 2)).toEqual(9);
  });
});
