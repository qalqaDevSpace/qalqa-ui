import { useEffect, useState, KeyboardEvent } from "react";
import {
  IDropdownItem,
  DropdownProps,
  IHandleClearEvent,
} from "../../model/DropdownModel";
import styles from "./Dropdown.module.scss";
import clsx from "clsx";
import LabelBox from "../LabelBox/LabelBox";

const Dropdown = ({
  label,
  items,
  autoClosing,
  excludeSelected,
  hideSelectedFromList,
  isSmartLabel,
  smartLabelVariant,
  clearButton,
  disabled,
  onChange,
}: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState<IDropdownItem>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(isVisible);

  const [filteredItems, setFilteredItems] = useState<IDropdownItem[]>(items);
  const [, setHiddenItems] = useState<IDropdownItem[]>([]);

  const selectDropdownItem = (item: IDropdownItem) => {
    setSelectedItem(item);
    onChange?.(item);

    if (hideSelectedFromList && selectedItem) {
      setHiddenItems((prev) => prev.filter((e) => e.id !== selectedItem.id));
      setFilteredItems((prev) => filterItemsByLabel([...prev, selectedItem]));
    }

    if (hideSelectedFromList) {
      setFilteredItems((prev) => prev.filter((e) => e.id !== item.id));
      setHiddenItems((prev) => [...prev, item]);
    }

    autoClosing && setIsVisible(false);
  };

  const removeItem = (item: IDropdownItem) => {
    setFilteredItems((prev) => prev.filter((e) => e.id !== item?.id));
  };

  const filterItemsByLabel = (array: IDropdownItem[]): IDropdownItem[] => {
    return array.sort((a, b) => a.label.localeCompare(b.label));
  };

  const openMenu = () => {
    setIsVisible(!isVisible);
  };

  const enterKeyDown = (event: KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" && !disabled) {
      action();
    }
  };

  const clear = () => {
    if (hideSelectedFromList && selectedItem) {
      setFilteredItems((prev) => filterItemsByLabel([...prev, selectedItem]));
      setSelectedItem(undefined);
    }
    setSelectedItem(undefined);
    onChange?.(undefined);
  };

  useEffect(() => {
    excludeSelected && selectedItem && removeItem(selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => setIsHidden(isVisible), 300);
    } else {
      setIsHidden(isVisible);
    }
  }, [isVisible]);

  const handleKeyDownOpenMenu = (event: KeyboardEvent<HTMLSpanElement>) => {
    enterKeyDown(event, openMenu);
  };
  const handleKeyDownSelectItem = (
    item: IDropdownItem,
    event: KeyboardEvent<HTMLLIElement>
  ) => {
    enterKeyDown(event, () => selectDropdownItem(item));
  };
  const handleKeyDownClear = (event: KeyboardEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    enterKeyDown(event, () => clear());
  };
  const handleClear = (event: IHandleClearEvent) => {
    event.stopPropagation();
    clear();
  };

  return (
    <div
      className={clsx(styles.dropdown, {
        [styles.opened]: isVisible,
        [styles.placeholder]: !selectedItem,
        [styles.smartLabel]: isSmartLabel && selectedItem,
        [styles.disabled]: disabled,
      })}
    >
      {isSmartLabel ? (
        <LabelBox
          simulateFocus={!!selectedItem}
          //TODO: найти более оптимальное решение
          position="center"
          label={label}
          variants={smartLabelVariant}
        >
          <span
            onClick={openMenu}
            className={styles.input}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={handleKeyDownOpenMenu}
          >
            {clearButton && (
              <i
                onClick={handleClear}
                onKeyDown={handleKeyDownClear}
                className={`material-symbols-outlined ` + styles.clear}
                tabIndex={selectedItem && !disabled ? 0 : -1}
              >
                cancel
              </i>
            )}
            <p className={styles["input-text"]}>
              {selectedItem && selectedItem.label}
            </p>
            <i className={`material-symbols-outlined ` + styles.icon}>
              keyboard_arrow_down
            </i>
          </span>
        </LabelBox>
      ) : (
        <span
          onClick={openMenu}
          className={styles.input}
          tabIndex={0}
          onKeyDown={handleKeyDownOpenMenu}
        >
          {clearButton && (
            <i
              onClick={handleClear}
              onKeyDown={handleKeyDownClear}
              className={`material-symbols-outlined ` + styles.clear}
              tabIndex={0}
            >
              cancel
            </i>
          )}
          <p className={styles["input-text"]}>
            {selectedItem ? selectedItem.label : label}
          </p>
          <i className={`material-symbols-outlined ` + styles.icon}>
            keyboard_arrow_down
          </i>
        </span>
      )}
      {isHidden && (
        <div className={styles.menu}>
          <ul className={styles.list}>
            {filteredItems.length !== 0 ? (
              filteredItems.map((item: IDropdownItem) => (
                <li
                  onClick={() => selectDropdownItem(item)}
                  key={item.id}
                  className={clsx(styles.item, {
                    [styles.selected]: item.id === selectedItem?.id,
                  })}
                  tabIndex={0}
                  onKeyDown={(event) => handleKeyDownSelectItem(item, event)}
                >
                  <span className={styles.text}>{item.label}</span>
                </li>
              ))
            ) : (
              <li className={styles.item}>No items</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
