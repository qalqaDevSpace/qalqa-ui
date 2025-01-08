import { Button } from "../components-lib";
import { useToast } from "../components-lib/components/ToastProvider/ToastProvider";
import styles from "./App.module.css";

function App() {
  const { addToast } = useToast();
  const showSuccess = () => {
    addToast({
      type: "success",
      message: "This is a success message!",
      duration: 3,
      position: "top-right",
    });
  };

  const showError = () => {
    addToast({
      type: "error",
      message: "This is a error messagddddde!",
      duration: 3,
      position: "top-right",
    });
  };
  const showWarning = () => {
    addToast({
      type: "warning",
      message: "This is a error messagddddde!",
      duration: 3,
      position: "top-right",
    });
  };
  const showInfo = () => {
    addToast({
      type: "info",
      message: "This is a error messagddddde!",
      duration: 3,
      position: "top-right",
    });
  };
  return (
    <>
      <div className={styles.container}>
        <Button
          label="Success"
          icon="check_circle"
          iconPosition="right"
          onClick={showSuccess}
        />
        <Button
          label="Error"
          variant="text"
          type="secondary"
          shadow
          icon="error"
          iconPosition="right"
          onClick={showError}
        />
        <Button
          label="Warning"
          variant="outlined"
          type="secondary"
          icon="warning"
          iconPosition="right"
          onClick={showWarning}
        />
        <Button
          label="Info"
          type="secondary"
          icon="info"
          iconPosition="right"
          onClick={showInfo}
        />
      </div>
    </>
  );
}

export default App;
