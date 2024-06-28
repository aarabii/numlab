import * as numTypes from "../../types/numberClassification.types";

export function isEven({ num }: numTypes.IsEvenProps): boolean {
  return num % 2 === 0;
}

export function isOdd({ num }: numTypes.IsOddProps): boolean {
  return num % 2 !== 0;
}

export function isPositive({ num }: numTypes.IsPositiveProps): boolean {
  return num > 0;
}

export function isNegative({ num }: numTypes.IsNegativeProps): boolean {
  return num < 0;
}

export function isZero({ num }: numTypes.IsZeroProps): boolean {
  return num === 0;
}

export function isWhole({ num }: numTypes.IsWholeProps): boolean {
  return Number.isInteger(num);
}

export function isDecimal({ num }: numTypes.IsDecimalProps): boolean {
  return !Number.isInteger(num);
}

export function isFraction({ num }: numTypes.IsFractionProps): boolean {
  return !Number.isInteger(num) && num > 0 && Number.isFinite(num);
}

export function isNegativeFraction({
  num,
}: numTypes.IsNegativeFractionProps): boolean {
  return num < 0 && isFraction({ num });
}

export function isPositiveFraction({
  num,
}: numTypes.IsPositiveFractionProps): boolean {
  return num > 0 && isFraction({ num });
}

export function isPerfect({ num }: numTypes.IsPerfectProps): boolean {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

export function isAbundant({ num }: numTypes.IsAbundantProps): boolean {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum > num;
}

export function isDeficient({ num }: numTypes.IsDeficientProps): boolean {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum < num;
}

export function isTriangular({ num }: numTypes.IsTriangularProps): boolean {
  let sum = 0;
  for (let i = 1; sum < num; i++) {
    sum += i;
    if (sum === num) return true;
  }
  return false;
}
