import * as numTypes from "../types/arithmetic.types";

export function sum({ numbers }: numTypes.SumProps): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

export function subtract({ numbers }: numTypes.SubtractProps): number {
  return numbers.reduce((acc, num) => acc - num);
}

export function multiply({ numbers }: numTypes.MultiplyProps): number {
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

export function sqrt({ x }: numTypes.SqrtProps): number {
  return Math.sqrt(x);
}

export function cbrt({ x }: numTypes.CbrtProps): number {
  return Math.cbrt(x);
}

export function abs({ x }: numTypes.AbsProps): number {
  return Math.abs(x);
}
