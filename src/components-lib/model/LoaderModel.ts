
export interface ILoaderProps {
    loaderType?: LoaderType;
    loaderSize?: LoaderSize;
    className?: string;

}

type LoaderType = "ring" | "bouncy" | "three dots";

type LoaderSize = 'sm' | 'md' | 'xl';