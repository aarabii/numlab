export type DataProps = { data: number[] };
export type DataWithValueProps = { data: number[]; x: number };
export type PercentileProps = { data: number[]; percent: number };
export type CorrelationCovarianceProps = {
  data1: number[];
  data2: number[];
};

export type MeanProps = DataProps;
export type MedianProps = DataProps;
export type ModeProps = DataProps;
export type RangeProps = DataProps;
export type VarianceProps = DataProps;
export type StandardDeviationProps = DataProps;
export type ZScoreProps = DataWithValueProps;
export type MeanDeviationProps = DataProps;
export type SkewnessProps = DataProps;
export type KurtosisProps = DataProps;
export type PercentilesProps = PercentileProps;
export type QuartilesProps = DataProps;
export type InterquartileRangeProps = DataProps;
export type OutliersProps = DataProps;
export type CorrelationProps = CorrelationCovarianceProps;
export type CovarianceProps = CorrelationCovarianceProps;
export type RegressionProps = CorrelationCovarianceProps;
export type ExponentialRegressionProps = DataProps;
export type LogarithmicRegressionProps = DataProps;
export type PowerRegressionProps = DataProps;
export type PolynomialRegressionProps = DataProps;
export type LinearRegressionProps = DataProps;
export type QuadraticRegressionProps = DataProps;
