import { LabelVariant } from './LabelBoxModel';

interface IBaseDropdownProps {
    id?: string;
    label: string;
    items: IDropdownItem[];
    disabled?: boolean;
    autoClosing?: boolean;
    excludeSelected?: boolean;
    hideSelectedFromList?: boolean;
    clearButton?: boolean;
    size?: DropdownSize;
    onChange?: (selectedItem: IDropdownItem | undefined) => void;
}

type DropdownSize = 'sm' | 'md' | 'xl';

export interface IDropdownItem {
    id: string;
    label: string;
    value: string;
    disabled?: boolean;
    hidden?: boolean;
}

interface ISmartLabelProps extends IBaseDropdownProps {
    isSmartLabel?: true;
    smartLabelVariant?: LabelVariant;
}

interface INoSmartLabelProps extends IBaseDropdownProps {
    isSmartLabel?: false;
    smartLabelVariant?: never;
}

export type DropdownProps = ISmartLabelProps | INoSmartLabelProps;

export type IHandleClearEvent =
    | React.MouseEvent<HTMLSpanElement>
    | React.KeyboardEvent<HTMLSpanElement>;
