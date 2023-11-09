import {forwardRef, Key, useState} from "react";
import {BaseInputProps, Button, ListOption} from "../../";
import {inputCommonClasses} from "../../constants.ts";
import {BiChevronDown} from 'react-icons/bi';
import {clsx} from "clsx";
import {Item, Select as UiSelect, ListBox, Popover, SelectValue} from "react-aria-components";

export type SelectDataType = string | number | undefined;

export interface SelectProps extends Omit<BaseInputProps, 'value' | 'defaultValue' | 'onChange'> {
    overrideClassName?: string;
    wrapperClassName?: string;
    options?: ListOption[];
    value?: SelectDataType;
    defaultValue?: SelectDataType;
    onChange?: (data: SelectDataType) => void;
    isNumber?: boolean;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
    (props, forwardRef) => {
        const [item, setItem] = useState(props.defaultValue);
        const itemName = props.options?.find(t => t.value === item)?.label;
        const [open, setOpen] = useState(false);

        const {
            large = false,
            overrideClassName,
            wrapperClassName,
            className,
            label,
            options = [],
            onChange,
            ...otherProps
        } = props;

        const selectControlClasses = clsx(
            'flex flex-col gap-1',
            wrapperClassName,
        )

        const selectButtonClasses = overrideClassName ?? clsx(
            'flex items-center w-full justify-between truncate',
            inputCommonClasses(Boolean(props.errorMessage), large),
            className,
        );

        const selectItemClasses = clsx(
            'px-2 py-1 rounded cursor-pointer truncate',
            'focus-visible:outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700',
            'aria-selected:bg-gray-100 dark:aria-selected:bg-gray-700',
        );

        function onValueChange(data: SelectDataType) {
            setItem(data);
            if (data) {
                onChange?.(data);
            }
        }

        return (
            <UiSelect className={selectControlClasses} ref={forwardRef} onSelectionChange={(data) => onValueChange(data as SelectDataType)} onOpenChange={setOpen} defaultSelectedKey={props.defaultValue as Key}>
                {label && <label>{label} {props.required && <span className="text-danger-500">*</span>}</label>}

                <Button overrideClassName={selectButtonClasses}>
                    <SelectValue className={clsx(!item && 'text-gray-400', 'truncate min-w-0')} defaultValue={props.defaultValue} {...otherProps}>{itemName ?? props.placeholder}</SelectValue>
                    <span aria-hidden="true" className={clsx(open && 'rotate-180', 'transition-transform shrink-0')}><BiChevronDown /></span>
                </Button>

                {props.errorMessage && <div className="text-sm text-danger-500" slot="errorMessage">{props.errorMessage}</div>}
                {!props.errorMessage && props.description && <div className="text-sm" slot="description">{props.description}</div>}

                <Popover>
                    <ListBox className="shadow bg-white dark:bg-gray-800 p-1 rounded">
                        {options.filter(t => t.value !== undefined).map((item) => (
                            <Item key={item.value as string | number} id={item.value} className={selectItemClasses}>
                                {item.label}
                            </Item>
                        ))}
                    </ListBox>
                </Popover>
            </UiSelect>
        );
    }
);
Select.displayName = "Select";
