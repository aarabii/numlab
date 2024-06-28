import * as numTypes from "../types/advancedMath.types";

export function factorial({ n }: numTypes.FactorialFunction): number {
  if (n === 0) return 1;
  return n * factorial({ n: n - 1 });
}

export function fibonacci({ n }: numTypes.FibonacciFunction): number {
  if (n <= 1) return n;
  return fibonacci({ n: n - 1 }) + fibonacci({ n: n - 2 });
}

export function isPrime({ n }: numTypes.IsPrimeFunction): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

export function isComposite({ n }: numTypes.IsCompositeFunction): boolean {
  return !isPrime({ n });
}

export function gcd({ a, b }: numTypes.GcdFunction): number {
  return b === 0 ? a : gcd({ a: b, b: a % b });
}

export function lcm({ a, b }: numTypes.LcmFunction): number {
  return Math.abs(a * b) / gcd({ a, b });
}

export function primeFactors({ n }: numTypes.PrimeFactorsFunction): number[] {
  const factors = [];
  let num = n;
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  return factors;
}

export function binomial({ n, k }: numTypes.BinomialFunction): number {
  if (k === 0 || k === n) return 1;
  return binomial({ n: n - 1, k: k - 1 }) + binomial({ n: n - 1, k });
}

export function hermite({ n, x }: numTypes.HermiteFunction): number {
  if (n === 0) return 1;
  if (n === 1) return 2 * x;
  return (
    2 * x * hermite({ n: n - 1, x }) - 2 * (n - 1) * hermite({ n: n - 2, x })
  );
}

export function laguerre({ n, x }: numTypes.LaguerreFunction): number {
  if (n === 0) return 1;
  if (n === 1) return 1 - x;
  return (
    (2 * n - 1 - x) * laguerre({ n: n - 1, x }) -
    (n - 1) * laguerre({ n: n - 2, x })
  );
}

export function legendre({ n, x }: numTypes.LegendreFunction): number {
  if (n === 0) return 1;
  if (n === 1) return x;
  return (
    (2 * n - 1) * x * legendre({ n: n - 1, x }) -
    (n - 1) * legendre({ n: n - 2, x })
  );
}

export function chebyshev({ n, x }: numTypes.ChebyshevFunction): number {
  if (n === 0) return 1;
  if (n === 1) return x;
  return 2 * x * chebyshev({ n: n - 1, x }) - chebyshev({ n: n - 2, x });
}

export function bessel({ n, x }: numTypes.BesselFunction): number {
  if (n === 0) return bessel({ n: 0, x });
  if (n === 1) return bessel({ n: 0, x });
  return ((2 * n - 1) / x) * bessel({ n: n - 1, x }) - bessel({ n: n - 2, x });
}

export function gamma({ n }: numTypes.GammaFunction): number {
  if (n === 0) {
    throw new Error("Gamma function is undefined for zero.");
  }
  if (n === 1) return 1;
  return (n - 1) * gamma({ n: n - 1 });
}

export function beta({ x, y }: numTypes.BetaFunction): number {
  return (gamma({ n: x }) * gamma({ n: y })) / gamma({ n: x + y });
}

export function zeta({ n }: numTypes.ZetaFunction): number {
  let sum = 0;
  for (let i = 1; i < 10000; i++) {
    sum += 1 / i ** n;
  }
  return sum;
}
