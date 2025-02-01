import clsx from 'clsx';
import { useState } from 'react';
import { InputProps } from '../../model/InputModel';
import { generateId } from '../../utils/generateIDs';
import LabelBox from '../LabelBox/LabelBox';
import styles from './InputText.module.scss';

export const InputText = ({
	id,
	label,
	labelText,
	labelVariant,
	placeholder,
	size,
	icon,
	iconAction,
	onInput,
}: InputProps) => {
	const checkedId = id ? id : generateId();
	const [input, setInput] = useState<string>();
	const [focus, setFocus] = useState<boolean>(false);

	const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
		onInput!(event.currentTarget.value);
		return setInput(event.currentTarget.value);
	};

	return (
		<>
			{label ? (
				<LabelBox
					label={labelText}
					size={size}
					variants={labelVariant}
					simulateFocus={focus}
				>
					<div className={clsx(styles.input, styles[`s-${size}`])}>
						<input
							id={checkedId}
							onFocus={() => setFocus(true)}
							onBlur={() => setFocus(input ? true : false)}
							className={styles.default}
							type="text"
							onInput={handleInput}
						/>
						{icon && (
							<i
								onClick={iconAction}
								className={`material-symbols-outlined ` + styles.icon}
							>
								{icon}
							</i>
						)}
					</div>
				</LabelBox>
			) : (
				<div className={clsx(styles.input, styles[`s-${size}`])}>
					<input
						className={styles.default}
						placeholder={placeholder}
						type="text"
					/>
					{icon && (
						<i
							onClick={iconAction}
							className={`material-symbols-outlined ` + styles.icon}
						>
							{icon}
						</i>
					)}
				</div>
			)}
		</>
	);
};

export default InputText;
