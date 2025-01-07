import { Button } from "../components-lib";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <h1>Test Stand for component</h1>
        <h2>BaseStyles of elements</h2>
        <h3>Title 3</h3>
        <h4>Title 4</h4>
        <h5>Title 5</h5>
        <h6>Title 6</h6>
        <p>Paragraph</p>
        <a href="#">Link</a>
        <button>Button</button>
        <input type="text" placeholder="Input" />
        <div>Div</div>
        <span>Span</span>
        <ul>
          <li>Unordered List item 1</li>
          <li>Unordered List item 2</li>
        </ul>
        <ol>
          <li>Ordered List item 1</li>
          <li>Ordered List item 2</li>
        </ol>
        <Button label="Click Me"></Button>
      </div>
    </>
  );
}

export default App;
