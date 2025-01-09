interface IBaseButtonProps {
    label: string;
    type?: ButtonType;
    size?: ButtonSize;
    disabled?: boolean;
    shadow?: boolean;
    icon?: string;
    iconPosition?: ButtonIconPosition;
    weight?: ButtonWeight;
    onClick?: () => void;
}

type ButtonType =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';

type ButtonWeight =
    | 'thin'
    | 'extralight'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold';

type ButtonSize = 'sm' | 'md' | 'xl';

type ButtonIconPosition = 'left' | 'right';

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
