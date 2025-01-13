import clsx from 'clsx';
import { ILabelBoxBaseProps } from '../../model/LabelBoxModel';
import styles from './LabelBox.module.scss';
import { useEffect, useState } from 'react';

const LabelBox: React.FC<ILabelBoxBaseProps> = ({
	children,
	variants = 'basic',
	label,
	size = 'md',
	position = 'left',
	simulateFocus,
}: ILabelBoxBaseProps) => {
	const [focus, setFocus] = useState<boolean>(false);

	useEffect(() => {
		setFocus(simulateFocus ?? false);
	}, [simulateFocus]);

	return (
		<div
			className={clsx(styles.box, styles[`s-${size}`], {
				[styles.focus]: focus,
				[styles.on]: variants === 'on',
				[styles.left]: position === 'left',
				[styles.center]: position === 'center',
				[styles.right]: position === 'right',
			})}
		>
			<span className={clsx(styles.label)}>{label}</span>

			<>{children}</>
		</div>
	);
};

export default LabelBox;
