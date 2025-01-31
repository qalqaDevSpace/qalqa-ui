import { ICheckboxGroupProps } from '../../model/CheckboxModel';
import { Switch } from '../Switch/Switch';
import styles from '../Switch/SwitchGroup.module.scss';

export const CheckboxGroup = ({
	options,
	name,
	toggle,
	disabled,
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
					isDisabled={option.isDisabled || disabled}
					isToggle={toggle}
					onChange={(value) => onChange(value)}
				/>
			))}
		</ul>
	);
};
