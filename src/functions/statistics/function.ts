import * as numTypes from "../../types/statistics.types";

export function mean({ data }: numTypes.MeanProps): number {
  return data.reduce((a, b) => a + b) / data.length;
}

export function median({ data }: numTypes.MedianProps): number {
  data.sort((a, b) => a - b);
  const mid = Math.floor(data.length / 2);
  return data.length % 2 !== 0 ? data[mid] : (data[mid - 1] + data[mid]) / 2;
}

export function mode({ data }: numTypes.ModeProps): number {
  const modeMap: { [key: number]: number } = {};
  data.forEach((num) => {
    modeMap[num] = (modeMap[num] || 0) + 1;
  });
  let modes: number[] = [];
  let max = 0;
  for (const num in modeMap) {
    if (modeMap[num] > max) {
      modes = [Number(num)];
      max = modeMap[num];
    } else if (modeMap[num] === max) {
      modes.push(Number(num));
    }
  }
  return modes.length === Object.keys(modeMap).length ? -1 : modes[0];
}

export function range({ data }: numTypes.RangeProps): number {
  return Math.max(...data) - Math.min(...data);
}

export function variance({ data }: numTypes.VarianceProps): number {
  const meanVal = mean({ data });
  return (
    data.reduce((acc, val) => acc + Math.pow(val - meanVal, 2), 0) / data.length
  );
}

export function standardDeviation({
  data,
}: numTypes.StandardDeviationProps): number {
  return Math.sqrt(variance({ data }));
}

export function zScore({ data, x }: { data: number[]; x: number }): number {
  return (x - mean({ data })) / standardDeviation({ data });
}

export function meanDeviation({ data }: numTypes.MeanDeviationProps): number {
  const meanVal = mean({ data });
  return (
    data.reduce((acc, val) => acc + Math.abs(val - meanVal), 0) / data.length
  );
}

export function skewness({ data }: numTypes.SkewnessProps): number {
  const meanVal = mean({ data });
  const sd = standardDeviation({ data });
  return (
    data.reduce((acc, val) => acc + Math.pow(val - meanVal, 3), 0) /
    data.length /
    Math.pow(sd, 3)
  );
}

export function kurtosis({ data }: numTypes.KurtosisProps): number {
  const meanVal = mean({ data });
  const sd = standardDeviation({ data });
  return (
    data.reduce((acc, val) => acc + Math.pow(val - meanVal, 4), 0) /
    data.length /
    Math.pow(sd, 4)
  );
}

export function percentiles({
  data,
  percent,
}: numTypes.PercentileProps): number {
  data.sort((a, b) => a - b);
  const index = (percent / 100) * data.length;
  return index % 1 === 0
    ? (data[index - 1] + data[index]) / 2
    : data[Math.floor(index)];
}

export function quartiles({ data }: numTypes.QuartilesProps): number[] {
  data.sort((a, b) => a - b);
  const mid = Math.floor(data.length / 2);
  const Q1 = data[Math.floor(mid / 2)];
  const Q2 =
    data.length % 2 !== 0 ? data[mid] : (data[mid - 1] + data[mid]) / 2;
  const Q3 = data[mid + Math.floor(mid / 2)];
  return [Q1, Q2, Q3];
}

export function interquartileRange({
  data,
}: numTypes.InterquartileRangeProps): number {
  const [Q1, , Q3] = quartiles({ data });
  return Q3 - Q1;
}

export function outliers({ data }: numTypes.OutliersProps): number[] {
  const [Q1, , Q3] = quartiles({ data });
  const IQR = Q3 - Q1;
  const lowerBound = Q1 - 1.5 * IQR;
  const upperBound = Q3 + 1.5 * IQR;
  return data.filter((val) => val < lowerBound || val > upperBound);
}

export function correlation({
  data1,
  data2,
}: numTypes.CorrelationProps): number {
  const mean1 = mean({ data: data1 });
  const mean2 = mean({ data: data2 });
  const sd1 = standardDeviation({ data: data1 });
  const sd2 = standardDeviation({ data: data2 });
  return (
    data1.reduce((acc, val, i) => acc + (val - mean1) * (data2[i] - mean2), 0) /
    (data1.length * sd1 * sd2)
  );
}

export function covariance({ data1, data2 }: numTypes.CovarianceProps): number {
  const mean1 = mean({ data: data1 });
  const mean2 = mean({ data: data2 });
  return (
    data1.reduce((acc, val, i) => acc + (val - mean1) * (data2[i] - mean2), 0) /
    data1.length
  );
}

export function regression({ data1, data2 }: numTypes.RegressionProps): {
  m: number;
  b: number;
} {
  const mean1 = mean({ data: data1 });
  const mean2 = mean({ data: data2 });
  const m =
    data1.reduce((acc, val, i) => acc + (val - mean1) * (data2[i] - mean2), 0) /
    data1.reduce((acc, val) => acc + Math.pow(val - mean1, 2), 0);
  return { m, b: mean2 - m * mean1 };
}

export function exponentialRegression({
  data,
}: numTypes.ExponentialRegressionProps): {
  a: number;
  b: number;
} {
  const logData = data.map((val, i) => [i, Math.log(val)]);
  const { m, b } = regression({
    data1: logData.map((val) => val[0]),
    data2: logData.map((val) => val[1]),
  });
  return { a: Math.exp(b), b: m };
}

export function logarithmicRegression({
  data,
}: numTypes.LogarithmicRegressionProps): {
  a: number;
  b: number;
} {
  const logIndexData = data.map((val, i) => [Math.log(i + 1), val]);
  const { m, b } = regression({
    data1: logIndexData.map((val) => val[0]),
    data2: logIndexData.map((val) => val[1]),
  });
  return { a: Math.exp(b), b: m };
}

export function powerRegression({ data }: numTypes.PowerRegressionProps): {
  a: number;
  b: number;
} {
  const logLogData = data.map((val, i) => [Math.log(i + 1), Math.log(val)]);
  const { m, b } = regression({
    data1: logLogData.map((val) => val[0]),
    data2: logLogData.map((val) => val[1]),
  });
  return { a: Math.exp(b), b: m };
}

export function polynomialRegression({
  data,
}: numTypes.PolynomialRegressionProps): number[] {
  const data2 = data.map((val, i) => [i, val]);
  const n = data2.length;
  const x = data2.map((val) => val[0]);
  const y = data2.map((val) => val[1]);
  const sum = Array(2 * n - 1)
    .fill(0)
    .map((_, i) => y.reduce((acc, val, j) => acc + Math.pow(x[j], i), 0));
  const matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i].push(sum[i + j]);
    }
  }
  return solve(matrix, sum.slice(1));
}

export function linearRegression({ data }: numTypes.LinearRegressionProps): {
  m: number;
  b: number;
} {
  return regression({ data1: data.map((val, i) => i), data2: data });
}

export function quadraticRegression({
  data,
}: numTypes.QuadraticRegressionProps): {
  a: number;
  b: number;
  c: number;
} {
  const data2 = data.map((val, i) => [Math.pow(i, 2), val]);
  const { m, b } = regression({
    data1: data2.map((val) => val[0]),
    data2: data2.map((val) => val[1]),
  });
  return { a: m, b, c: b };
}

function solve(matrix: number[][], sum: number[]): number[] {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    let maxRow = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(matrix[j][i]) > Math.abs(matrix[maxRow][i])) {
        maxRow = j;
      }
    }
    [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]];
    [sum[i], sum[maxRow]] = [sum[maxRow], sum[i]];
    for (let j = i + 1; j < n; j++) {
      const factor = matrix[j][i] / matrix[i][i];
      sum[j] -= factor * sum[i];
      for (let k = i; k < n; k++) {
        matrix[j][k] -= factor * matrix[i][k];
      }
    }
  }
  const solution = Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let sum2 = sum[i];
    for (let j = i + 1; j < n; j++) {
      sum2 -= matrix[i][j] * solution[j];
    }
    solution[i] = sum2 / matrix[i][i];
  }
  return solution;
}
