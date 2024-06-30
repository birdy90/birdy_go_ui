'use client';

import {forwardRef, useState} from "react";
import {Button} from "../buttons";
import {BaseInputProps, ListOption} from "../../types";
import {inputCommonClasses} from "../../constants";
import {BiChevronDown} from 'react-icons/bi';
import {clsx} from "clsx";
import {ListBoxItem, Select as UiSelect, ListBox, Popover, SelectValue} from "react-aria-components";
import {InputWrapper} from "./InputWrapper";
import {twMerge} from "tailwind-merge";

export type SelectDataType = string | number | undefined;

export interface SelectProps extends Omit<BaseInputProps, 'value' | 'defaultValue' | 'onChange'> {
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
            wrapperClassName,
            className,
            label,
            description,
            errorMessage,
            required,
            options = [],
            onChange,
            ...otherProps
        } = props;

        const selectControlClasses = twMerge(clsx(
            'flex flex-col gap-1',
            wrapperClassName,
        ));

        const selectButtonClasses = twMerge(clsx(
            'flex items-center w-full justify-between truncate',
            inputCommonClasses(Boolean(props.errorMessage)),
            className,
        ));

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
            <UiSelect className={selectControlClasses} ref={forwardRef} onSelectionChange={(data) => onValueChange(data as SelectDataType)} onOpenChange={setOpen} defaultSelectedKey={props.defaultValue}>
                <InputWrapper label={label} description={description} errorMessage={errorMessage} required={required}>
                    <Button unstyled className={selectButtonClasses}>
                        <SelectValue className={clsx(!item && 'text-gray-400', 'truncate min-w-0')} defaultValue={props.defaultValue} {...otherProps}>
                            {itemName ?? props.placeholder}
                        </SelectValue>
                        <span aria-hidden="true" className={clsx(open && 'rotate-180', 'transition-transform shrink-0')}>
                            <BiChevronDown />
                        </span>
                    </Button>
                </InputWrapper>

                <Popover>
                    <ListBox className="shadow bg-white dark:bg-gray-800 p-1 rounded">
                        {options.filter(t => t.value !== undefined).map((item) => (
                            <ListBoxItem key={item.value as string | number} id={item.value} className={selectItemClasses}>
                                {item.label}
                            </ListBoxItem>
                        ))}
                    </ListBox>
                </Popover>
            </UiSelect>
        );
    }
);
Select.displayName = "Select";
