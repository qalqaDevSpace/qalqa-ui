interface ILabelBoxBaseProps {
    id: string;
    children: React.ReactNode;
    label: string;
    variants?: LabelVariant;
    position?: LabelPosition;
}

interface ILabelDisabledFocus extends ILabelBoxBaseProps {
    disableFocusActions?: true;
    simulateFocus?: boolean;
}

interface ILabelEnabledFocus extends ILabelBoxBaseProps {
    disableFocusActions?: false;
    simulateFocus?: never;
}

export type LabelVariant = 'basic' | 'on';
type LabelPosition = 'left' | 'center' | 'right';

export type LabelBoxProps = ILabelDisabledFocus | ILabelEnabledFocus;
