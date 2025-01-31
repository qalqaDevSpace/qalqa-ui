import { CheckboxOption } from './CheckboxModel';

interface ISwitchBaseProps {
	id?: string;
	checked?: boolean;
	value: string;
	invalid?: boolean;
	name?: string;
	type?: SwitchType;
	size?: SwitchSize;
	isDisabled?: boolean;
	isToggle?: boolean;
	onChange?: (option: CheckboxOption) => void;
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
