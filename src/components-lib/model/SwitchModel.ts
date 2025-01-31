import { CheckboxOption } from './CheckboxModel';

interface ISwitchBaseProps {
	id?: string;
	isToggle?: boolean;
	checked?: boolean;
	onChange?: (option: CheckboxOption) => void;
	value: string;
	invalid?: boolean;
	name?: string;
	disabled?: boolean;
	type?: SwitchType;
	size?: SwitchSize;
}

type SwitchType = 'checkbox' | 'radio';

type SwitchSize = 'sm' | 'md' | 'lg';

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
