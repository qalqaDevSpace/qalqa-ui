export interface ICheckboxBaseProps {
	id?: string;
	checked?: boolean;
	onChange?: () => void;
	value?: string;
	invalid?: boolean;
	name?: string;
	disabled?: boolean;
	size?: CheckboxSize;
}

export type CheckboxSize = 'sm' | 'md' | 'lg';

type LabelPosition = 'left' | 'right';

type CheckboxWithLabel = ICheckboxBaseProps & {
	label: string;
	labelPosition?: LabelPosition;
};

type CheckboxWithoutLabel = ICheckboxBaseProps & {
	label?: never;
	labelPosition?: never;
};

export type ICheckboxProps = CheckboxWithLabel | CheckboxWithoutLabel;
