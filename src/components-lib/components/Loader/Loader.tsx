import clsx from 'clsx';
import { LoaderProps, strokeEnum } from '../../model/LoaderModel';
import s from './Loader.module.scss';

export const Loader: React.FC<LoaderProps> = ({
	type = 'ring',
	loaderSize = 'md',
	className = '',
	speed = 'default',
	opacity = 'none',
	stroke = 'default',
	color = 'primary',
}) => {
	//base
	const loaderClassnames = clsx(s[`container_${type}`], className);
	// ring
	const ringLoaderClassNames = clsx(
		loaderClassnames,
		s[`r-loader-color-${color}`],
		s[`r-speed-${speed}`],
		s[`r-size-${loaderSize}`]
	);

	const trackClassnames = clsx(s.track, s[`opacity-${opacity}`]);
	const carClassnames = clsx(s.car, s[`car-speed-${speed}`]);

	//dots
	const dotsLoaderClassnames = clsx(
		loaderClassnames,
		s[`d-size-${loaderSize}`]
	);

	const dotsCubeClassnames = clsx(
		s.cube,
		s[`cube-size-${loaderSize}`],
		s[`cube-speed-${speed}`],
		s[`loader-color-${color}`]
	);

	const dotsInnerCubeClassnames = clsx(
		s.cube__inner,
		s[`cube__inner-speed-${speed}`],
		s[`d-loader-color-${color}`]
	);

	//bouncy

	const bouncyClassnames = clsx(
		loaderClassnames,
		s.container_bouncy,
		s[`b-size-${loaderSize}`]
	);

	const bouncyCubeClassnames = clsx(
		s.container_bouncy_cube,
		s[`bouncy_cube-size-${loaderSize}`],
		s[`bouncy_cube-speed-${speed}-size-${loaderSize}`],
		s[`b-loader-color-${color}`]
	);

	return (
		<>
			{type == 'ring' && (
				<svg
					className={ringLoaderClassNames}
					viewBox="0 0 40 40"
					height="40"
					width="40"
				>
					<circle
						className={trackClassnames}
						cx="20"
						cy="20"
						r="17.5"
						pathLength="100"
						strokeWidth={strokeEnum[stroke]}
						fill="none"
					/>
					<circle
						className={carClassnames}
						cx="20"
						cy="20"
						r="17.5"
						pathLength="100"
						strokeWidth={strokeEnum[stroke]}
						fill="none"
					/>
				</svg>
			)}

			{type == 'dots' && (
				<div className={dotsLoaderClassnames}>
					<div className={dotsCubeClassnames}>
						<div className={dotsInnerCubeClassnames}></div>
					</div>
					<div className={dotsCubeClassnames}>
						<div className={dotsInnerCubeClassnames}></div>
					</div>
					<div className={dotsCubeClassnames}>
						<div className={dotsInnerCubeClassnames}></div>
					</div>
				</div>
			)}

			{type == 'bouncy' && (
				<div className={bouncyClassnames}>
					<div className={bouncyCubeClassnames}></div>
				</div>
			)}
		</>
	);
};
