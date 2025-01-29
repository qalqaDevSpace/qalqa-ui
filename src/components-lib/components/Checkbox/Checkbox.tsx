import clsx from 'clsx';
import { useState } from 'react';
import { ICheckboxProps } from '../../model/CheckboxModel';
import styles from './Checkbox.module.scss';

export const Checkbox = ({
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
				clsx(styles['checkbox-container'], styles[`s-${size}`])
			}
		>
			{labelPosition === 'left' ||
				(!labelPosition && label && (
					<label className={styles['checkbox-label']} htmlFor={id}>
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
				className={clsx(styles['checkbox-input'], {
					[styles.invalid]: invalid,
					[styles.disabled]: disabled,
					[styles.checked]: checked ? checked : dummyChecked,
				})}
			/>
			{labelPosition === 'right' && label && (
				<label className={styles['checkbox-label']} htmlFor={id}>
					{label}
				</label>
			)}
		</div>
	);
};
