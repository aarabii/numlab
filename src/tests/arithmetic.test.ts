import {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  power,
  sqrt as sq,
  cubert as cube,
  abs,
} from "../functions/arithmetic";

describe("Arithmetic functions", () => {
  describe("sum", () => {
    it("should correctly sum two numbers", () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
    });
  });

  describe("subtract", () => {
    it("should correctly subtract two numbers", () => {
      const result = subtract(5, 3);
      expect(result).toBe(2);
    });
  });

  describe("multiply", () => {
    it("should correctly multiply two numbers", () => {
      const result = multiply(2, 3);
      expect(result).toBe(6);
    });
  });

  describe("divide", () => {
    it("should correctly divide two numbers", () => {
      const result = divide({ dividend: 6, divisor: 2 });
      expect(result).toBe(3);
    });
  });

  describe("divide", () => {
    it("should throw an error if the divisor is 0", () => {
      expect(() => divide({ dividend: 6, divisor: 0 })).toThrow();
    });
  });

  describe("modulus", () => {
    it("should correctly calculate the modulus of two numbers", () => {
      const result = modulus({ dividend: 5, divisor: 2 });
      expect(result).toBe(1);
    });
  });

  describe("modulus", () => {
    it("should throw an error if the divisor is 0", () => {
      expect(() => modulus({ dividend: 6, divisor: 0 })).toThrow();
    });
  });

  describe("power", () => {
    it("should correctly calculate the power of two numbers", () => {
      const result = power({ base: 2, exponent: 3 });
      expect(result).toBe(8);
    });
  });

  describe("sq", () => {
    it("should correctly calculate the square root of a number", () => {
      const result = sq(9);
      expect(result).toBe(3);
    });
  });

  describe("cube", () => {
    it("should correctly calculate the cube root of a number", () => {
      const result = cube(27);
      expect(result).toBe(3);
    });
  });

  describe("abs", () => {
    it("should correctly calculate the absolute value of a number", () => {
      const result = abs(-5);
      expect(result).toBe(5);
    });
  });

  describe("abs", () => {
    it("should correctly calculate the absolute value of a number", () => {
      const result = abs(5);
      expect(result).toBe(5);
    });
  });
});
