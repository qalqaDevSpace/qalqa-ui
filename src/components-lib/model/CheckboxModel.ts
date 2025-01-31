export type CheckboxOption = {
	label?: string;
	value: string;
	isSelected?: boolean;
};

export interface ICheckboxGroupProps {
	options: CheckboxOption[];
	name: string;
	isToggle?: boolean;
	onChange: (value: CheckboxOption) => void;
}
