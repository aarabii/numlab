export type NumberArrayProps = { numbers: number[] };
export type TwoNumberProps = { dividend: number; divisor: number };
export type BaseExponentProps = { base: number; exponent: number };
export type SingleNumberProps = { x: number };

export type SumProps = NumberArrayProps;
export type SubtractProps = NumberArrayProps;
export type MultiplyProps = NumberArrayProps;
export type DivideProps = TwoNumberProps;
export type ModulusProps = TwoNumberProps;
export type PowerProps = BaseExponentProps;
export type SqrtProps = SingleNumberProps;
export type CbrtProps = SingleNumberProps;
export type AbsProps = SingleNumberProps;
