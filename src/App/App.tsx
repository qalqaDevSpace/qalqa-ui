import { useState } from 'react';
import {
	Button,
	Dropdown,
	InputText,
	ThemeButton,
	useToast,
} from '../components-lib';
import {
	CheckboxGroup,
	CheckboxOption,
} from '../components-lib/components/Checkbox/CheckboxGroup';
import {
	RadioGroup,
	RadioOption,
} from '../components-lib/components/Radio/RadioGroup';
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

	const switchOptions = [
		{
			label: 'Ginger 1',
			value: 'ginger',
		},
		{
			label: 'Ginger 2',
			value: 'ginger2',
		},
		{
			label: 'Ginger 3',
			value: 'ginger3',
		},
	];

	const switchChOptions = [
		{
			label: 'Ginger 1',
			value: 'ginger',
			isSelected: true,
		},
		{
			label: 'Ginger 2',
			value: 'ginger2',
		},
		{
			label: 'Ginger 3',
			value: 'ginger3',
			isSelected: true,
		},
	];

	const [selectedRadio, setSelectedRadio] = useState<RadioOption>();
	const [selectedCheckboxes, setSelectedCheckboxes] = useState<
		CheckboxOption[]
	>([]);
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
					autoClosing
					// hideSelectedFromList
					// excludeSelected
					isSmartLabel
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
				<ThemeButton />
				<div>
					{/* <Switch
						id="nigga"
						label="Nigga"
						size="sm"
						name="sex"
						// invalid={!checked}
						// onChange={() => setChecked(!checked)}
						// checked={checked}
					/>
					<Switch
						id="nigga1"
						label="Nigga11"
						size="sm"
						name="sex"
						// invalid={!checked}
						// onChange={() => setChecked(!checked)}
						// checked={checked}
					/> */}
					<RadioGroup
						options={switchOptions}
						name="ginger"
						onChange={(value) => setSelectedRadio(value)}
					/>
					{selectedRadio?.label && <p>{selectedRadio.label}</p>}
					<CheckboxGroup options={switchChOptions} name="ginger-cb" />
				</div>
			</div>
		</>
	);
}

export default App;
