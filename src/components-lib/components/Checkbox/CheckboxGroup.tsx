import { Switch } from '../Switch/Switch';

export type CheckboxOption = {
	label?: string;
	value: string;
	isSelected?: boolean;
};

interface ICheckboxGroupProps {
	options: CheckboxOption[];
	name: string;
	onChange?: (value: CheckboxOption) => void;
}

export const CheckboxGroup = ({
	options,
	name,
	onChange,
}: ICheckboxGroupProps) => {
	return (
		<>
			{options.map((option) => (
				<Switch
					key={option.value}
					type="checkbox"
					id={option.value}
					label={option?.label}
					value={option.value}
					name={name}
					onChange={() => onChange && onChange(option)}
				/>
			))}
		</>
	);
};
