export type CheckboxOption = {
	label?: string;
	value: string;
	isDisabled?: boolean;
	isSelected?: boolean;
};

export interface ICheckboxGroupProps {
	options: CheckboxOption[];
	name: string;
	toggle?: boolean;
	disabled?: boolean;
	onChange: (value: CheckboxOption) => void;
}
