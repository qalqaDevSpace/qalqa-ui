import { Switch } from '../Switch/Switch';
import styles from '../Switch/SwitchGroup.module.scss';

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
		<ul className={styles['switch-group']}>
			{options.map((option) => (
				<Switch
					key={option.value}
					type="checkbox"
					id={option.value}
					label={option?.label}
					value={option.value}
					checked={option.isSelected}
					name={name}
					onChange={() => onChange && onChange(option)}
				/>
			))}
		</ul>
	);
};
