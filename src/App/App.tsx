import { Button } from "../components-lib";
import { useToast } from "../components-lib/components/ToastProvider/ToastProvider";
import styles from "./App.module.css";

function App() {
  const { addToast } = useToast();
  const showSuccess = () => {
    addToast({
      type: "success",
      message: "This is a success message!",
      duration: 10,
    });
  };

  const showError = () => {
    addToast({
      type: "error",
      message: "This is a error message!",
      duration: 3,
    });
  };
  const showWarning = () => {
    addToast({
      type: "warning",
      message: "This is a warning message!",
      duration: 3,
    });
  };
  const showInfo = () => {
    addToast({
      type: "info",
      message: "This is a info message!",
      duration: 3,
    });
  };
  return (
    <>
      <div className={styles.container}>
        <Button
          label="Success"
          type="success"
          icon="check_circle"
          onClick={showSuccess}
        />
        <Button label="Error" type="error" icon="error" onClick={showError} />
        <Button
          label="Warning"
          type="warning"
          icon="warning"
          onClick={showWarning}
        />
        <Button label="Info" type="info" icon="info" onClick={showInfo} />
        <Button label="Primary" onClick={showInfo} />
        <Button label="Secondary" type="secondary" onClick={showInfo} />
      </div>
    </>
  );
}

export default App;
