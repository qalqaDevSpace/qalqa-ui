import clsx from 'clsx';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ISwitchProps } from '../../model/SwitchModel';
import { CheckboxOption } from '../Checkbox/CheckboxGroup';
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
	const [selected, setSelected] = useState<boolean>(false);
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newState = event.target.checked;
		const newObject: CheckboxOption = {
			label,
			value,
			isSelected: newState,
		};

		setSelected(newState);
		onChange?.(newObject);
	};

	//Убрать эту хуйню в проде потому-что это кринж
	const effectRun = useRef(false);
	useEffect(() => {
		if (effectRun.current) return;
		effectRun.current = true;
		onChange?.({ label, value, isSelected: checked || false });
		setSelected(checked || false);
	}, []);

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
			{type === 'radio' ? (
				<input
					type={type}
					onChange={handleChange}
					value={value}
					checked={checked}
					name={name}
					id={id}
					className={clsx(styles['switch-input'], {
						[styles.radio]: type === 'radio',
						[styles.invalid]: invalid,
						[styles.disabled]: disabled,
						[styles.checked]: checked,
					})}
				/>
			) : (
				<input
					type={type}
					onChange={handleChange}
					value={value}
					checked={selected}
					name={name}
					id={id}
					className={clsx(styles['switch-input'], {
						[styles.checkbox]: type === 'checkbox',
						[styles.invalid]: invalid,
						[styles.disabled]: disabled,
						[styles.checked]: selected,
					})}
				/>
			)}
			{labelPosition === 'right' && label && (
				<label className={styles['switch-label']} htmlFor={id}>
					{label}
				</label>
			)}
		</div>
	);
};
