import { useState } from 'react';
import { Button, InputText } from '../components-lib';
import Dropdown from '../components-lib/components/Dropdown/Dropdown';
import Loader from '../components-lib/components/Loader/Loader';
import { useToast } from '../components-lib/components/ToastProvider/ToastProvider';
import { IDropdownItem } from '../components-lib/model/DropdownModel';
import styles from './App.module.css';

function App() {
  const { addToast } = useToast();
  const showSuccess = () => {
    addToast({
      type: 'success',
      message: 'This is a success message!',
      duration: 10,
    });
  };

  const showError = () => {
    addToast({
      type: 'error',
      message: 'This is a error message!',
      duration: 3,
    });
  };
  const showWarning = () => {
    addToast({
      type: 'warning',
      message: 'This is a warning message!',
      duration: 3,
    });
  };
  const showInfo = () => {
    addToast({
      type: 'info',
      message: 'This is a info message!',
      duration: 3,
    });
  };

  const items = [
    { id: '1', label: 'Item 1', value: 'Item 1' },
    { id: '2', label: 'Item 2', value: 'Item 2' },
    { id: '3', label: 'Item 3', value: 'Item 3' },
  ];

  const [selectedItem, setSelectedItem] = useState<IDropdownItem | null>(null);
  const [printed, setPrinted] = useState<string | null>();
  const handleDropdownChange = (selectedItem: IDropdownItem | undefined) => {
    setSelectedItem(selectedItem || null);
  };

  const handleInput = (value: string | undefined) => {
    setPrinted(value || null);
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
        <Loader opacity="soft" loaderSize="xxl" stroke="tight" color="error" />
        <Loader type="dots" speed="fast" color="info" />
        <Loader type="bouncy" color="error" />
        <Button label="Error" type="error" icon="error" onClick={showError} />
        <Button
          label="Warning"
          type="warning"
          icon="warning"
          onClick={showWarning}
        ></Button>
        <Button
          label="Info"
          type="info"
          size="sm"
          icon="info"
          onClick={showInfo}
        />
        <Button label="Primary" size="xl" onClick={showInfo} />
        <Button label="Secondary" type="secondary" onClick={showInfo} />
        <Dropdown
          label="Nigga"
          items={items}
          onChange={handleDropdownChange}
          size="sm"
          // autoClosing
          // hideSelectedFromList
          // excludeSelected
          // isSmartLabel
          // smartLabelVariant="on"
          //FIXME: сделать обработку hover-а и фокуса на smartLabel
          // disabled
          clearButton
        />
        <p>Selected: {selectedItem ? selectedItem.label : 'None'}</p>
        <InputText
          // label
          // labelText="Damn"
          placeholder="123"
          icon="home"
          size="sm"
          iconAction={() => console.log('123')}
          onInput={handleInput}
        />
        <p>Printed: {printed}</p>
      </div>
    </>
  );
}

export default App;
