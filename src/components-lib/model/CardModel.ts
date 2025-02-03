interface ICardModel {
    onClick?: () => void,
    hoverable?: boolean,
    title?: string,
    subtitle?: string,
    children?: React.ReactNode,
    classNames?: string,
    photo?: Photo,
    photoPosition: PhotoPosition,
    photoType?: photoType
}

type PhotoPosition = 'left' | 'right' | 'top' | 'bottom'
type Photo = { src: string, alt: string }
type photoType = 'avatar' | 'default';
export type CardProps = ICardModel;