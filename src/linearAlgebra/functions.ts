import * as numTypes from "../types/linearAlgebra.types";

function checkMismatch({ vm1, vm2 }: numTypes.checkMismatchProps) {
  if (vm1.length !== vm2.length) {
    throw new Error("Vectors/Matrices must be the same length");
  }
}

export function dotProduct({
  vector1,
  vector2,
}: numTypes.DotProductProps): number {
  checkMismatch({ vm1: vector1, vm2: vector2 });
  return vector1.reduce((acc, curr, idx) => acc + curr * vector2[idx], 0);
}

export function crossProduct({
  vector1,
  vector2,
}: numTypes.CrossProductProps): number[] {
  checkMismatch({ vm1: vector1, vm2: vector2 });
  return [
    vector1[1] * vector2[2] - vector1[2] * vector2[1],
    vector1[2] * vector2[0] - vector1[0] * vector2[2],
    vector1[0] * vector2[1] - vector1[1] * vector2[0],
  ];
}

export function matrixMultiplication({
  matrix1,
  matrix2,
}: numTypes.MatrixMultiplicationProps): number[][] {
  if (matrix1[0].length !== matrix2.length) {
    throw new Error("Matrix 1 columns must equal Matrix 2 rows");
  }
  return matrix1.map((row, i) =>
    row.map((_, j) =>
      row.reduce((acc, curr, k) => acc + curr * matrix2[k][j], 0)
    )
  );
}

export function transpose({ matrix }: numTypes.TransposeProps): number[][] {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}

export function determinant({ matrix }: numTypes.DeterminantProps): number {
  if (matrix.length !== matrix[0].length) {
    throw new Error("Matrix must be square");
  }
  if (matrix.length === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }
  return matrix[0].reduce(
    (acc, curr, i) =>
      acc +
      curr *
        Math.pow(-1, i) *
        determinant({
          matrix: matrix.slice(1).map((row) => row.filter((_, j) => j !== i)),
        }),
    0
  );
}

export function inverse({ matrix }: numTypes.InverseProps): number[][] {
  const det = determinant({ matrix });
  if (det === 0) {
    throw new Error("Matrix must be invertible");
  }
  return matrix.map((row, i) =>
    row.map(
      (_, j) =>
        (Math.pow(-1, i + j) *
          determinant({
            matrix: matrix
              .filter((_, k) => k !== i)
              .map((row) => row.filter((_, l) => l !== j)),
          })) /
        det
    )
  );
}

export function eigenvalues({ matrix }: numTypes.EigenvaluesProps): number[] {
  if (matrix.length !== matrix[0].length) {
    throw new Error("Matrix must be square");
  }

  return [];
}

export function eigenvectors({
  matrix,
}: numTypes.EigenvectorsProps): number[][] {
  if (matrix.length !== matrix[0].length) {
    throw new Error("Matrix must be square");
  }

  return [];
}
export function trace({ matrix }: numTypes.TraceProps): number {
  if (matrix.length !== matrix[0].length) {
    throw new Error("Matrix must be square");
  }
  return matrix.reduce((acc, row, i) => acc + row[i], 0);
}

function rank(matrix: number[][]): number {
  let m = matrix.length;
  let n = matrix[0].length;

  let A: number[][] = matrix.map((row) => [...row]);

  let rank = 0;
  for (let row = 0; row < m; row++) {
    let nonZeroFound = false;
    for (let col = 0; col < n; col++) {
      if (A[row][col] !== 0) {
        nonZeroFound = true;
        rank++;

        for (let k = row + 1; k < m; k++) {
          let factor = A[k][col] / A[row][col];
          for (let l = col; l < n; l++) {
            A[k][l] -= factor * A[row][l];
          }
        }
        break;
      }
    }
    if (!nonZeroFound) {
      break;
    }
  }
  return rank;
}

function matrixNullity(matrix: number[][]): number {
  let m = matrix.length;
  let n = matrix[0].length;

  let rank_val = rank(matrix);

  return n - rank_val;
}

export function isSymmetric({ matrix }: numTypes.IsSymmetricProps): boolean {
  if (matrix.length !== matrix[0].length) {
    throw new Error("Matrix must be square");
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
    }
  }

  return true;
}

export function isSkewSymmetric({
  matrix,
}: numTypes.IsSkewSymmetricProps): boolean {
  if (matrix.length !== matrix[0].length) {
    throw new Error("Matrix must be square");
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      if (matrix[i][j] !== -matrix[j][i]) {
        return false;
      }
    }
  }

  return true;
}
