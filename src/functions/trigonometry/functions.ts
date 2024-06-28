import * as numTypes from "../../types/trigonometry.types";

const PI = Math.PI;

export function sin({ angle }: numTypes.SinFunction) {
  return Math.sin(angle);
}

export function cos({ angle }: numTypes.CosFunction) {
  return Math.cos(angle);
}

export function tan({ angle }: numTypes.TanFunction) {
  return Math.tan(angle);
}

export function csc({ angle }: numTypes.CscFunction) {
  return 1 / Math.sin(angle);
}

export function sec({ angle }: numTypes.SecFunction) {
  return 1 / Math.cos(angle);
}

export function cot({ angle }: numTypes.CotFunction) {
  return 1 / Math.tan(angle);
}

export function asin({ angle }: numTypes.AsinFunction) {
  return Math.asin(angle);
}

export function acos({ angle }: numTypes.AcosFunction) {
  return Math.acos(angle);
}

export function atan({ angle }: numTypes.AtanFunction) {
  return Math.atan(angle);
}

export function acsc({ angle }: numTypes.AcscFunction) {
  return Math.asin(1 / angle);
}

export function asec({ angle }: numTypes.AsecFunction) {
  return Math.acos(1 / angle);
}

export function acot({ angle }: numTypes.AcotFunction) {
  return Math.atan(1 / angle);
}

export function sinh({ angle }: numTypes.SinhFunction) {
  return Math.sinh(angle);
}

export function cosh({ angle }: numTypes.CoshFunction) {
  return Math.cosh(angle);
}

export function tanh({ angle }: numTypes.TanhFunction) {
  return Math.tanh(angle);
}

export function csch({ angle }: numTypes.CschFunction) {
  return 1 / Math.sinh(angle);
}

export function sech({ angle }: numTypes.SechFunction) {
  return 1 / Math.cosh(angle);
}

export function coth({ angle }: numTypes.CothFunction) {
  return 1 / Math.tanh(angle);
}

export function asinh({ angle }: numTypes.AsinhFunction) {
  return Math.asinh(angle);
}

export function acosh({ angle }: numTypes.AcoshFunction) {
  return Math.acosh(angle);
}

export function atanh({ angle }: numTypes.AtanhFunction) {
  return Math.atanh(angle);
}

export function acsch({ angle }: numTypes.AcschFunction) {
  return Math.asinh(1 / angle);
}

export function asech({ angle }: numTypes.AsechFunction) {
  return Math.acosh(1 / angle);
}

export function acoth({ angle }: numTypes.AcothFunction) {
  return Math.atanh(1 / angle);
}

export function toRadians({ angle }: numTypes.ToRadiansFunction) {
  return angle * (PI / 180);
}

export function toDegrees({ angle }: numTypes.ToDegreesFunction) {
  return angle * (180 / PI);
}
