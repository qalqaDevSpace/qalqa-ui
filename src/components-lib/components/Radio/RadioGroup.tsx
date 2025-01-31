import { useState } from 'react';
import { Switch } from '../Switch/Switch';

type RadioOption = {
	label?: string;
	value: string;
};

interface IRadioGroup {
	options: RadioOption[];
	name: string;
	selectedDefault?: RadioOption;
	onChange?: (value: RadioOption) => void;
}

export const RadioGroup = ({
	options,
	name,
	selectedDefault,
	onChange,
}: IRadioGroup) => {
	const [selected, setSelected] = useState<RadioOption | null>(
		selectedDefault || null
	);

	const handleSelect = (option: RadioOption) => {
		setSelected(option);
		onChange && onChange(option);
	};
	return (
		<>
			{options.map((option) => (
				<div key={option.value}>
					{option.label && <label htmlFor={option.value}>{option.label}</label>}
					<Switch
						type="radio"
						id={option.value}
						value={option.value}
						name={name}
						checked={selected?.value === option.value}
						onChange={() => handleSelect(option)}
					/>
				</div>
			))}
		</>
	);
};
