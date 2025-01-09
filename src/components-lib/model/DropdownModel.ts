export interface IDropdownProps {
    label: string;
    items: IDropdownItem[];
    disabled?: boolean;
    autoClosing?: boolean;
    excludeSelected?: boolean;
    hideSelectedFromList?: boolean;
    clearButton?: boolean;
    onChange?: (selectedItem: IDropdownItem | undefined) => void;
}

export interface IDropdownItem {
    id: string;
    label: string;
    value: string;
    disabled?: boolean;
    hidden?: boolean;
}

export type IHandleClearEvent =
    | React.MouseEvent<HTMLSpanElement>
    | React.KeyboardEvent<HTMLSpanElement>;
