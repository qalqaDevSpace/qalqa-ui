import { useEffect, useState } from 'react';
import { IRadioGroupProps, RadioOption } from '../../model/RadioModal';
import { Switch } from '../Switch/Switch';
import styles from '../Switch/SwitchGroup.module.scss';

export const RadioGroup = ({
	options,
	name,
	toggle,
	disabled,
	selectedDefault,
	onChange,
}: IRadioGroupProps) => {
	const [selected, setSelected] = useState<RadioOption | null>();

	const handleSelect = (option: RadioOption | null) => {
		setSelected(option);
		if (!option) return;
		onChange && onChange(option);
	};

	useEffect(() => {
		handleSelect(selectedDefault || null);
	}, []);
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
					isDisabled={option.isDisabled || disabled}
					checked={selected?.value === option.value}
					isToggle={toggle}
					onChange={() => handleSelect(option)}
				/>
			))}
		</ul>
	);
};
