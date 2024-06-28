import * as numTypes from "../types/logarithms.types";

export function log({ x, base }: numTypes.log): number {
  return Math.log(x) / Math.log(base);
}

export function ln({ x }: numTypes.ln): number {
  return Math.log(x);
}

export function log2({ x }: numTypes.log2): number {
  return Math.log2(x);
}

export function log10({ x }: numTypes.log10): number {
  return Math.log10(x);
}

export function log1p({ x }: numTypes.log1p): number {
  return Math.log1p(x);
}

export function log2p({ x }: numTypes.log2p): number {
  return Math.log2(x + 1);
}

export function log10p({ x }: numTypes.log10p): number {
  return Math.log10(x + 1);
}

export function antilog({ x, base }: numTypes.antilog): number {
  return Math.pow(base, x);
}

export function antiln({ x }: numTypes.antiln): number {
  return Math.exp(x);
}

export function antilog2({ x }: numTypes.antilog2): number {
  return Math.pow(2, x);
}

export function antilog10({ x }: numTypes.antilog10): number {
  return Math.pow(10, x);
}
