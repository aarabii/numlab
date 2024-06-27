import * as numTypes from "../types/advancedMath.types";

export function factorial(num: numTypes.factorialProps): number {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

export function fibonacci(num: numTypes.fibonacciProps): number {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

export function isPrime(num: numTypes.isPrimeProps): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

export function isComposite(num: numTypes.isCompositeProps): boolean {
  return !isPrime(num);
}

export function gcd(nums: numTypes.gcdProps): number {
  const [a, b] = nums;
  return b === 0 ? a : gcd([b, a % b]);
}

export function lcm(nums: numTypes.lcmProps): number {
  const [a, b] = nums;
  return Math.abs(a * b) / gcd([a, b]);
}

export function primeFactors(num: numTypes.primeFactorsProps): number[] {
  const factors = [];
  let n = num;
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
}

export function binomial(nums: numTypes.binomialProps): number {
  const [n, k] = nums;
  if (k === 0 || k === n) return 1;
  return binomial([n - 1, k - 1]) + binomial([n - 1, k]);
}

export function hermite(nums: numTypes.hermiteProps): number {
  const [n, x] = nums;
  if (n === 0) return 1;
  if (n === 1) return 2 * x;
  return 2 * x * hermite([n - 1, x]) - 2 * (n - 1) * hermite([n - 2, x]);
}

export function laguerre(nums: numTypes.laguerreProps): number {
  const { n, x } = nums;
  if (n === 0) return 1;
  if (n === 1) return 1 - x;
  return (
    (2 * n - 1 - x) * laguerre({ n: n - 1, x }) -
    (n - 1) * laguerre({ n: n - 2, x })
  );
}

export function legendre(nums: numTypes.legendreProps): number {
  const [n, x] = nums;
  if (n === 0) return 1;
  if (n === 1) return x;
  return (
    (2 * n - 1) * x * legendre([n - 1, x]) - (n - 1) * legendre([n - 2, x])
  );
}

export function chebyshev(nums: numTypes.chebyshevProps): number {
  const [n, x] = nums;
  if (n === 0) return 1;
  if (n === 1) return x;
  return 2 * x * chebyshev([n - 1, x]) - chebyshev([n - 2, x]);
}

export function bessel(nums: numTypes.besselProps): number {
  const [n, x] = nums;
  if (n === 0) return bessel([0, x]);
  if (n === 1) return bessel([0, x]);
  return ((2 * n - 1) / x) * bessel([n - 1, x]) - bessel([n - 2, x]);
}

export function gamma(num: numTypes.gammaProps): number {
  if (num === 0) {
    throw new Error("Gamma function is undefined for zero.");
  }
  if (num === 1) return 1;
  return (num - 1) * gamma(num - 1);
}

export function beta(nums: numTypes.betaProps): number {
  const [a, b] = nums;
  return (gamma(a) * gamma(b)) / gamma(a + b);
}

export function zeta(num: numTypes.zetaProps): number {
  let sum = 0;
  for (let i = 1; i < 10000; i++) {
    sum += 1 / i ** num;
  }
  return sum;
}
