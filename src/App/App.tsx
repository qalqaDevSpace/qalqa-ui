import { useEffect, useState } from 'react';
import {
	Button,
	CheckboxGroup,
	Dropdown,
	InputText,
	Loader,
	RadioGroup,
	Switch,
	Table,
	ThemeButton,
	useToast,
} from '../components-lib';
import { CheckboxOption } from '../components-lib/model/CheckboxModel';
import { IDropdownItem } from '../components-lib/model/DropdownModel';
import { RadioOption } from '../components-lib/model/RadioModal';
import { Data, IColumn } from '../components-lib/model/TableModel';
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
			label: 'Option 1',
			value: 'opt-1',
		},
		{
			label: 'Option 2',
			value: 'opt-2',
		},
		{
			label: 'Option 3',
			value: 'opt-3',
			isDisabled: true,
		},
	];

	const switchChOptions = [
		{
			label: 'Checkbox 1',
			value: 'check-1',
			isSelected: true,
			isDisabled: true,
		},
		{
			label: 'Checkbox 2',
			value: 'check-2',
		},
		{
			label: 'Checkbox 3',
			value: 'check-3',
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

	const columns: IColumn[] = [
		{ header: 'ID', accessor: 'id' },
		{ header: 'Name', accessor: 'name' },
		{
			header: 'Email',
			accessor: 'email',
			isSortable: true,
			isFiltrable: true,
		},
		{
			header: 'Actions',
			accessor: 'actions',
		},
	];

	const [tableData, setTableData] = useState<Data[]>([]);

	const data: Data[] = [
		{
			id: 1,
			name: 'Lorem Ipsum',
			email: 'lorem@example.com',
			actions: [
				{
					label: 'Delete',
					type: 'error',
					action: (rowData: Data) => handleDelete(rowData),
				},
				{
					label: 'Log',
					type: 'success',
					action: (rowData: Data) => console.log(rowData),
				},
			],
		},
		{ id: 3, name: 'Dolor Sit', email: 'dolor@example.com' },
		{ id: 2, name: 'Amet Consectetur', email: 'amet@example.com' },
	];

	useEffect(() => {
		setTableData(data);
	}, []);

	const handleDelete = (row: Data) => {
		setTableData((prevData) => prevData.filter((item) => item.id !== row.id));
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
					label="Dropdown label"
					items={items}
					onChange={handleDropdownChange}
					size="sm"
					autoClosing
					// hideSelectedFromList
					// excludeSelected
					isSmartLabel
					// smartLabelVariant="on"
					// disabled
					clearButton
				/>
				<p>Selected: {selectedItem ? selectedItem.label : 'None'}</p>
				<InputText
					label
					labelText="Damn"
					// placeholder="123"
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
						name="radio"
						onChange={(value) => setSelectedRadio(value)}
					/>
					<CheckboxGroup
						options={switchChOptions}
						name="check"
						onChange={(option) =>
							setSelectedCheckboxes((prev) =>
								option.isSelected
									? [...prev, option]
									: prev.filter((e) => e.value !== option.value)
							)
						}
					/>
					<Switch
						id="single"
						value="single"
						name="single"
						label="Switch test"
						isToggle
					/>
					<Table columns={columns} data={tableData} sortable />
					<Loader />
					<Loader type="dots" />
					<Loader type="bouncy" />
				</div>
			</div>
		</>
	);
}

export default App;
