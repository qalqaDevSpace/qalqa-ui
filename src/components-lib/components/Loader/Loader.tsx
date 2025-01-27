import clsx from "clsx";
import { LoaderProps, strokeEnum } from "../../model/LoaderModel";
import s from "./Loader.module.scss";

const Loader: React.FC<LoaderProps> = ({
  type = "ring",
  loaderSize = "md",
  className = "",
  speed = "default",
  BGOpacity = "none",
  stroke = "default",
}) => {
  const loaderClassNames = clsx(
    s.container,
    s.container_ring,
    s.loader,
    s[`size-${loaderSize}`],
    s[`speed-${speed}`],
    className
  );

  const trackClassnames = clsx(s.track, s[`opacity-${BGOpacity}`]);

  return (
    <>
      {type == "ring" && (
        <svg
          className={loaderClassNames}
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
            className={s.car}
            cx="20"
            cy="20"
            r="17.5"
            pathLength="100"
            strokeWidth={strokeEnum[stroke]}
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

export default Loader;
