interface ICardModel {
    onClick?: () => void,
    hoverable?: boolean,
    title?: string,
    subtitle?: string,
    children?: React.ReactNode;
}

export type CardProps = ICardModel;