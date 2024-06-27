import * as numTypes from "../types/arithmetic.types";

export function sum(...numbers: numTypes.SumProps): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

export function subtract(...numbers: numTypes.SubtractProps): number {
  return numbers.reduce((acc, num) => acc - num);
}

export function multiply(...numbers: numTypes.MultiplyProps): number {
  return numbers.reduce((acc, num) => acc * num, 1);
}

export function divide({ dividend, divisor }: numTypes.DivideProps): number {
  if (divisor === 0) {
    throw new Error("Cannot divide by 0");
  }
  return dividend / divisor;
}

export function modulus({ dividend, divisor }: numTypes.ModulusProps): number {
  if (divisor === 0) {
    throw new Error("Cannot divide by 0");
  }

  return dividend % divisor;
}

export function power({ base, exponent }: numTypes.PowerProps): number {
  return base ** exponent;
}

export function sqrt(num: numTypes.SqrtProps): number {
  return Math.sqrt(num);
}

export function cubert(num: numTypes.CbrtProps): number {
  return Math.cbrt(num);
}

export function abs(num: numTypes.AbsProps): number {
  return Math.abs(num);
}
