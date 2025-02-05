export type CardProps = {
    onClick?: React.MouseEventHandler,
    hoverable?: boolean,
    title?: string,
    subtitle?: string,
    children?: React.ReactNode,
    classNames?: string,
    loading?: boolean,
    size?: CardSize,
    style?: React.CSSProperties
}

type CardSize = 'sm' | 'md' | 'xl';