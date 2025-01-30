import clsx from 'clsx';
import { useState } from 'react';
import { ICheckboxProps } from '../../model/SwitchModel';
import styles from './Switch.module.scss';

export const Switch = ({
	id,
	onChange,
	value,
	invalid,
	name,
	label,
	checked,
	size = 'md',
	labelPosition,
	disabled,
}: ICheckboxProps) => {
	const [dummyChecked, setDummyChecked] = useState(false);
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
				type="checkbox"
				onChange={
					onChange ? onChange : (e) => setDummyChecked(e.target.checked)
				}
				value={value}
				checked={checked ? checked : dummyChecked}
				name={name}
				id={id}
				className={clsx(styles['switch-input'], {
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
