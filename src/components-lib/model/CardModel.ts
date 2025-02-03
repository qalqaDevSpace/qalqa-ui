export type CardProps = {
    onClick?: () => void,
    hoverable?: boolean,
    title?: string,
    subtitle?: string,
    children?: React.ReactNode,
    classNames?: string,
    img?: Photo,
    photoPosition: PhotoPosition,
    header?: CardHeader,
    footer?: CardFooter
}

type PhotoPosition = 'left' | 'right' | 'top' | 'bottom'
type Photo = { src: string, alt?: string }

export type MetaProps = {
    photoPosition: PhotoPosition,
    avatar: Photo,
    title?: string,
    subtitle?: string,
}

type CardHeader = {
    title?: string,
    subtitle?: string,
    children?: React.ReactNode,
}

type CardFooter = {
    title?: string,
    subtitle?: string,
    children?: React.ReactNode,
}