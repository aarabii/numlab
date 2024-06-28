export type RandomProps = { type?: string };
export type RandomInRangeProps = { min?: number; max: number };
export type RandomNormalProps = { mean: number; stdDev: number };
export type ArrayProps = { array: any[] };
export type SampleProps = { array: any[]; size: number };
export type RandomSeedProps = { seed: number };

export type ShuffleProps = ArrayProps;
