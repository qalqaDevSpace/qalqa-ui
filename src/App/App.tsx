import { Button } from "../components-lib";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Button
          label="Click Me"
          type="primary"
          shadow
          weight="bold"
          size="xl"
          icon="home"
          iconPosition="right"
        />
      </div>
    </>
  );
}

export default App;
