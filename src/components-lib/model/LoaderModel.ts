
import { TupleToUnion } from "../utils/tupleToUnion";

export const strokeTypeArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
] as const;

export const speedTypeArr = [
    0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
    1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0,
    2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0,
    3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0,
    4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0,
    5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0,
    6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.0
] as const;

export const opacityTypeArr = [
    0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1
] as const;

type SpeedType = TupleToUnion<typeof speedTypeArr>;
type BGOpacity = TupleToUnion<typeof opacityTypeArr>;
type StrokeType = TupleToUnion<typeof strokeTypeArr>

type LoaderSize = 'sm' | 'md' | 'xl';

interface IBaseLoader {
    loaderSize?: LoaderSize,
    className?: string,
    speed?: SpeedType,
}

interface IRingLoader extends IBaseLoader {
    type?: 'ring',
    BGOpacity?: BGOpacity,
    stroke?: StrokeType;
}

interface IDotsLoader extends IBaseLoader {
    type: 'dots',
    BGOpacity?: never,
    stroke?: never;
}

interface IBouncyLoader extends IBaseLoader {
    type: 'bouncy'
    BGOpacity?: never,
    stroke?: never;
}

export type LoaderProps = IRingLoader | IDotsLoader | IBouncyLoader;

