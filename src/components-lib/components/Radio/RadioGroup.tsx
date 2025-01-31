import { useState } from 'react';
import { Switch } from '../Switch/Switch';
import styles from '../Switch/SwitchGroup.module.scss';

export type RadioOption = {
	label?: string;
	value: string;
};

interface IRadioGroupProps {
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
}: IRadioGroupProps) => {
	const [selected, setSelected] = useState<RadioOption | null>(
		selectedDefault || null
	);

	const handleSelect = (option: RadioOption) => {
		setSelected(option);
		onChange && onChange(option);
	};
	return (
		<ul className={styles['switch-group']}>
			{options.map((option) => (
				<Switch
					key={option.value}
					type="radio"
					id={option.value}
					label={option?.label}
					value={option.value}
					name={name}
					checked={selected?.value === option.value}
					onChange={() => handleSelect(option)}
				/>
			))}
		</ul>
	);
};
