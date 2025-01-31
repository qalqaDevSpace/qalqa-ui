export type RadioOption = {
	label?: string;
	value: string;
	isDisabled?: boolean;
};

export interface IRadioGroupProps {
	options: RadioOption[];
	name: string;
	toggle?: boolean;
	selectedDefault?: RadioOption;
	disabled?: boolean;
	onChange?: (value: RadioOption) => void;
}
