import {
  SumProps,
  SubtractProps,
  MultiplyProps,
  DivideProps,
  ModulusProps,
  PowerProps,
  SqrtProps,
  CbrtProps,
  AbsProps,
} from "../types/arithmeticTypes";

export function sum(...numbers: SumProps): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

export function subtract(...numbers: SubtractProps): number {
  return numbers.reduce((acc, num) => acc - num);
}

export function multiply(...numbers: MultiplyProps): number {
  return numbers.reduce((acc, num) => acc * num, 1);
}

export function divide({ dividend, divisor }: DivideProps): number {
  if (divisor === 0) {
    throw new Error("Cannot divide by 0");
  }
  return dividend / divisor;
}

export function modulus({ dividend, divisor }: ModulusProps): number {
  if (divisor === 0) {
    throw new Error("Cannot divide by 0");
  }

  return dividend % divisor;
}

export function power({ base, exponent }: PowerProps): number {
  return base ** exponent;
}

export function sqrt(num: SqrtProps): number {
  return Math.sqrt(num);
}

export function cubert(num: CbrtProps): number {
  return Math.cbrt(num);
}

export function abs(num: AbsProps): number {
  return Math.abs(num);
}
