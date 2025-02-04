export type CardProps = {
    onClick?: () => void,
    hoverable?: boolean,
    title?: string,
    subtitle?: string,
    children?: React.ReactNode,
    classNames?: string,
    img?: Photo,
    photoPosition?: PhotoPosition
}

type PhotoPosition = 'left' | 'right' | 'top' | 'bottom'
type Photo = { src: string, alt?: string }