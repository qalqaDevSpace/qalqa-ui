import clsx from 'clsx';
import { useState } from 'react';
import { ISwitchProps } from '../../model/SwitchModel';
import styles from './Switch.module.scss';

export const Switch = ({
	id,
	onChange,
	value,
	invalid,
	name,
	label,
	checked,
	type = 'checkbox',
	size = 'md',
	labelPosition,
	disabled,
}: ISwitchProps) => {
	const [dummyChecked, setDummyChecked] = useState(false);
	const handleChange = () => {
		if (onChange) {
			onChange();
		}
		if (type === 'checkbox') {
			setDummyChecked(!dummyChecked);
		}
	};
	return (
		<div
			className={
				'material-symbols-outlined ' +
				clsx(styles['switch-container'], styles[`s-${size}`])
			}
		>
			{labelPosition === 'left' ||
				(!labelPosition && label && (
					<label className={styles['switch-label']} htmlFor={id}>
						{label}
					</label>
				))}
			<input
				type={type}
				onChange={handleChange}
				value={value}
				checked={checked ? checked : dummyChecked}
				name={name}
				id={id}
				className={clsx(styles['switch-input'], {
					[styles.checkbox]: type === 'checkbox',
					[styles.radio]: type === 'radio',
					[styles.invalid]: invalid,
					[styles.disabled]: disabled,
					[styles.checked]: checked ? checked : dummyChecked,
				})}
			/>
			{labelPosition === 'right' && label && (
				<label className={styles['switch-label']} htmlFor={id}>
					{label}
				</label>
			)}
		</div>
	);
};
