import * as numTypes from "../types/random.types";

export function random({
  type = "Int",
}: numTypes.randomProps): number | string {
  switch (type) {
    case "Int":
      return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    case "Float":
      return Math.random() * Number.MAX_VALUE;
    case "Char":
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      return characters.charAt(Math.floor(Math.random() * characters.length));
    default:
      throw new Error("Invalid type. Supported types are: Int, Float, Char");
  }
}

export function randomInRange({
  min = 0,
  max,
}: numTypes.randomInRangeProps): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomNormal({
  mean,
  stdDev,
}: numTypes.randomNormalProps): number {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return (
    mean + stdDev * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
  );
}

export function shuffle({ array }: numTypes.shuffleProps): any[] {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export function sample({ array, size }: numTypes.sampleProps): any[] {
  return shuffle({ array }).slice(0, size);
}

export function randomSeed({ seed }: numTypes.randomSeedProps): void {
  Math.random = function () {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
}
