import { LabelPosition, LabelVariant } from './LabelBoxModel';

interface IInputBaseProps {
    id?: string;
    onInput?: (value: string | undefined) => void;
    size?: InputSize;
}

type InputSize = 'sm' | 'md' | 'xl';

interface IInputLabel extends IInputBaseProps {
    label?: true;
    labelText: string;
    labelPosition?: LabelPosition;
    labelVariant?: LabelVariant;
    placeholder?: never;
}

interface IInputNoLabel extends IInputBaseProps {
    label?: false;
    labelText?: never;
    labelPosition?: never;
    labelVariant?: never;
    placeholder?: string;
}

interface IInputIcon extends IInputBaseProps {
    icon: string;
    iconAction?: () => void;
}

interface IInputNoIcon extends IInputBaseProps {
    icon: undefined;
    iconAction: never;
}

export type InputProps = (IInputLabel | IInputNoLabel) &
    (IInputIcon | IInputNoIcon);
