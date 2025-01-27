export enum strokeEnum {
    'default' = 4,
    'tight' = 2,
    'wide' = 7
}

type SpeedType = 'default' | 'slow' | 'fast';

type BGOpacity = 'none' | 'soft' | 'normal';

type LoaderSize = 'sm' | 'md' | 'xl' | 'xxl' | 'xxxl';

interface IBaseLoader {
    loaderSize?: LoaderSize,
    className?: string,
    speed?: SpeedType,
}

interface IRingLoader extends IBaseLoader {
    type?: 'ring',
    BGOpacity?: BGOpacity,
    stroke?: keyof typeof strokeEnum;
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