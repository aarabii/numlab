export type randomProps = {
  type?: string;
};

export type randomInRangeProps = {
  min?: number;
  max: number;
};

export type randomNormalProps = {
  mean: number;
  stdDev: number;
};

export type shuffleProps = {
  array: any[];
};

export type sampleProps = {
  array: any[];
  size: number;
};

export type randomSeedProps = {
  seed: number;
};
