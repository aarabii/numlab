export type VectorProps = { vector1: number[]; vector2: number[] };
export type MatrixProps = { matrix: number[][] };

export type CheckMismatchProps = VectorProps;
export type DotProductProps = VectorProps;
export type CrossProductProps = VectorProps;
export type MatrixMultiplicationProps = {
  matrix1: number[][];
  matrix2: number[][];
};
export type TransposeProps = MatrixProps;
export type DeterminantProps = MatrixProps;
export type InverseProps = MatrixProps;
export type EigenvaluesProps = MatrixProps;
export type EigenvectorsProps = MatrixProps;
export type TraceProps = MatrixProps;
export type RankProps = MatrixProps;
export type NullityProps = MatrixProps;
export type IsSymmetricProps = MatrixProps;
export type IsSkewSymmetricProps = MatrixProps;
