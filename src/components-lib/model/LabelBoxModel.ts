export interface ILabelBoxBaseProps {
    children: React.ReactNode;
    label: string;
    variants?: LabelVariant;
    position?: LabelPosition;
    simulateFocus: boolean;
}

export type LabelVariant = 'basic' | 'on';
export type LabelPosition = 'left' | 'center' | 'right';
