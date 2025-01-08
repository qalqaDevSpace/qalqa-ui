interface IBaseButtonProps {
    label: string;
    type?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md' | 'xl';
    disabled?: boolean;
    shadow?: boolean;
    icon?: string;
    iconPosition?: 'left' | 'right';
    weight?:
        | 'thin'
        | 'extralight'
        | 'light'
        | 'regular'
        | 'medium'
        | 'semibold'
        | 'bold'
        | 'extrabold';
    onClick?: () => void;
}

interface ILinkButtonProps extends IBaseButtonProps {
    link: true;
    href?: string;
}

interface IRegularButtonProps extends IBaseButtonProps {
    link?: false;
    href?: never;
}

interface ITextButtonProps extends IBaseButtonProps {
    variant?: 'text';
    shadow?: boolean;
}

interface ILinkOutlineButtonProps extends IBaseButtonProps {
    variant: 'link' | 'outlined';
    shadow?: never;
}

export type ButtonProps = (ILinkButtonProps | IRegularButtonProps) &
    (ILinkOutlineButtonProps | ITextButtonProps);
