import { ILoaderProps } from "../../model/LoaderModel";

 const Loader: React.FC<ILoaderProps> = ({
    loaderType = 'ring',
    loaderSize = 'md',
    className = '',
}) => {

    const loaderClassNames = 
  return (
    <div>Loader</div>
  )
}

export default Loader;
