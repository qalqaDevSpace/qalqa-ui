import clsx from 'clsx';
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
	// const [dummyChecked, setDummyChecked] = useState(false);
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
				onChange={onChange}
				value={value}
				checked={checked}
				name={name}
				id={id}
				className={clsx(styles['switch-input'], {
					[styles.invalid]: invalid,
					[styles.disabled]: disabled,
					[styles.checked]: checked,
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
