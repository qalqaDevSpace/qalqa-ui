export enum strokeEnum {
    'default' = 4,
    'tight' = 2,
    'wide' = 7
}

type SpeedType = 'default' | 'slow' | 'fast';

type Opacity = 'none' | 'soft' | 'normal';

type LoaderSize = 'sm' | 'md' | 'xl' | 'xxl' | 'xxxl';

type Color =
    'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';

interface IBaseLoader {
    loaderSize?: LoaderSize,
    className?: string,
    speed?: SpeedType,
    color?: Color
}

interface IRingLoader extends IBaseLoader {
    type?: 'ring',
    opacity?: Opacity,
    stroke?: keyof typeof strokeEnum;
}

interface IDotsLoader extends IBaseLoader {
    type: 'dots',
    opacity?: never,
    stroke?: never;
}

interface IBouncyLoader extends IBaseLoader {
    type: 'bouncy'
    opacity?: never,
    stroke?: never;
}

export type LoaderProps = IRingLoader | IDotsLoader | IBouncyLoader;