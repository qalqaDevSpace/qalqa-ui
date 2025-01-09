export interface ILabelBoxProps {
    children: React.ReactNode;
    variants?: LabelVariant;
}

type LabelVariant = 'basic' | 'on';
