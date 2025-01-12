import clsx from "clsx";
import { LoaderProps } from "../../model/LoaderModel";
import s from './Loader.module.scss'

 const Loader: React.FC<LoaderProps> = ({
    type = 'ring',
    loaderSize = 'md',
    className = '',
    speed = 2,
    BGOpacity = 0,
    stroke = 6,
}) => {

    const loaderClassNames =  clsx(
      s.loader,
      s[`t-${type}`],
      s[`s-${loaderSize}`],
      className,
    );

  return (
    <div>Loader</div>
  )
}

export default Loader;
