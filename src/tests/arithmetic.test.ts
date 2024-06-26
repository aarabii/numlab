import { sum } from "../functions/arithmetic";
import { SumProps } from "../types/arithmeticTypes";

describe("Arithmetic functions", () => {
  describe("sum", () => {
    it("should correctly sum two numbers", () => {
      // Arrange
      const testData: SumProps = { a: 5, b: 3 };

      // Act
      const result = sum(testData);

      // Assert
      expect(result).toBe(8);
    });

    it("should handle negative numbers correctly", () => {
      // Arrange
      const testData: SumProps = { a: -5, b: -3 };

      // Act
      const result = sum(testData);

      // Assert
      expect(result).toBe(-8);
    });

    it("should return zero when adding zero to any number", () => {
      // Arrange
      const testData1: SumProps = { a: 5, b: 0 };
      const testData2: SumProps = { a: 0, b: 5 };

      // Act
      const result1 = sum(testData1);
      const result2 = sum(testData2);

      // Assert
      expect(result1).toBe(5);
      expect(result2).toBe(5);
    });
  });
});
