export interface ISwitchBaseProps {
	id?: string;
	isToggle?: boolean;
	checked?: boolean;
	onChange?: () => void;
	value?: string;
	invalid?: boolean;
	name?: string;
	disabled?: boolean;
	type?: 'radio' | 'checkbox';
	size?: SwitchSize;
}

export type SwitchSize = 'sm' | 'md' | 'lg';

type LabelPosition = 'left' | 'right';

type SwitchWithLabel = ISwitchBaseProps & {
	label: string;
	labelPosition?: LabelPosition;
};

type SwitchWithoutLabel = ISwitchBaseProps & {
	label?: never;
	labelPosition?: never;
};

export type ISwitchProps = SwitchWithLabel | SwitchWithoutLabel;
