
import { useEffect, useState } from 'react';
import {
	Button,
	CheckboxGroup,
	Dropdown,
	InputText,
	RadioGroup,
	Switch,
	ThemeButton,
	useToast,
} from '../components-lib';
import { CheckboxOption } from '../components-lib/model/CheckboxModel';
import { IDropdownItem } from '../components-lib/model/DropdownModel';
import { RadioOption } from '../components-lib/model/RadioModal';
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
			label: 'U playing Dota?',
			value: 'ginger-dota',
		},
		{
			label: 'U a happy?',
			value: 'ginger-nt-happy',
			isDisabled: true,
		},
		{
			label: 'U have a girlfriend?',
			value: 'ginger-nt-girlfriend',
			isDisabled: true,
		},
	];

	const switchChOptions = [
		{
			label: 'U cunt?',
			value: 'ginger-cunt',
			isSelected: true,
			isDisabled: true,
		},
		{
			label: 'U faggot?',
			value: 'ginger2-fag',
		},
		{
			label: 'U a nigga?',
			value: 'ginger-nigga',
		},
	];

	const [selectedRadio, setSelectedRadio] = useState<RadioOption>();
	const [selectedCheckboxes, setSelectedCheckboxes] = useState<
		CheckboxOption[]
	>([]);

	useEffect(() => {
		console.clear();
		console.log(selectedRadio);
	}, [selectedRadio]);

	useEffect(() => {
		console.clear();
		console.table(selectedCheckboxes);
	}, [selectedCheckboxes]);
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
					<RadioGroup
						options={switchOptions}
						selectedDefault={switchOptions[0]}
						name="ginger"
						onChange={(value) => setSelectedRadio(value)}
					/>
					<CheckboxGroup
						options={switchChOptions}
						name="ginger-cb"
						onChange={(option) =>
							setSelectedCheckboxes((prev) =>
								option.isSelected
									? [...prev, option]
									: prev.filter((e) => e.value !== option.value)
							)
						}
					/>
					<Switch isToggle value="single" name="single" label="U single?" />
				</div>
			</div>
		</>
	);
}

export default App;
