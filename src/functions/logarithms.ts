import * as numTypes from "../types/logarithms.types";

export function log({ x, base }: numTypes.LogProps): number {
  return Math.log(x) / Math.log(base);
}

export function ln({ x }: numTypes.LnProps): number {
  return Math.log(x);
}

export function log2({ x }: numTypes.Log2Props): number {
  return Math.log2(x);
}

export function log10({ x }: numTypes.Log10Props): number {
  return Math.log10(x);
}

export function log1p({ x }: numTypes.Log1pProps): number {
  return Math.log1p(x);
}

export function log2p({ x }: numTypes.Log2pProps): number {
  return Math.log2(x + 1);
}

export function log10p({ x }: numTypes.Log10pProps): number {
  return Math.log10(x + 1);
}

export function antilog({ x, base }: numTypes.AntilogProps): number {
  return Math.pow(base, x);
}

export function antiln({ x }: numTypes.AntilnProps): number {
  return Math.exp(x);
}

export function antilog2({ x }: numTypes.Antilog2Props): number {
  return Math.pow(2, x);
}

export function antilog10({ x }: numTypes.Antilog10Props): number {
  return Math.pow(10, x);
}
