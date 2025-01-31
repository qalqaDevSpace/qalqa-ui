export type RadioOption = {
	label?: string;
	value: string;
};

export interface IRadioGroupProps {
	options: RadioOption[];
	name: string;
	isToggle?: boolean;
	selectedDefault?: RadioOption;
	onChange?: (value: RadioOption) => void;
}
