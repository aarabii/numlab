import * as numTypes from "../types/numberClassification.types";

export function isEven(num: numTypes.isEvenProps): boolean {
  return num % 2 === 0;
}

export function isOdd(num: numTypes.isOddProps): boolean {
  return num % 2 !== 0;
}

export function isPositive(num: numTypes.isPositiveProps): boolean {
  return num > 0;
}

export function isNegative(num: numTypes.isNegativeProps): boolean {
  return num < 0;
}

export function isZero(num: numTypes.isZeroProps): boolean {
  return num === 0;
}

export function isWhole(num: numTypes.isWholeProps): boolean {
  return Number.isInteger(num);
}

export function isDecimal(num: numTypes.isDecimalProps): boolean {
  return !Number.isInteger(num);
}

export function isFraction(num: numTypes.isFractionProps): boolean {
  return Number.isInteger(1 / num);
}

export function isNegativeFraction(
  num: numTypes.isNegativeFractionProps
): boolean {
  return num < 0 && isFraction(num);
}

export function isPositiveFraction(
  num: numTypes.isPositiveFractionProps
): boolean {
  return num > 0 && isFraction(num);
}

export function isPerfect(num: numTypes.isPerfectProps): boolean {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

export function isAbundant(num: numTypes.isAbundantProps): boolean {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum > num;
}

export function isDeficient(num: numTypes.isDeficientProps): boolean {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum < num;
}

export function isTriangular(num: numTypes.isTriangularProps): boolean {
  let sum = 0;
  for (let i = 1; sum < num; i++) {
    sum += i;
    if (sum === num) return true;
  }
  return false;
}
