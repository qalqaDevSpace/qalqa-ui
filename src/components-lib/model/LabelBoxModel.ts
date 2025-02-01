export interface ILabelBoxBaseProps {
	children: React.ReactNode;
	label: string;
	size?: LabelBoxSize;
	variants?: LabelVariant;
	position?: LabelPosition;
	simulateFocus: boolean;
}
type LabelBoxSize = 'sm' | 'md' | 'xl';
export type LabelVariant = 'basic' | 'on';
export type LabelPosition = 'left' | 'center' | 'right';
