import {SelectItem, Select as UiSelect} from "@nextui-org/select";
import {forwardRef, useId} from "react";
import {BaseInputProps, ListOption} from "../../";

export interface SelectProps extends Omit<BaseInputProps, 'value' | 'defaultValue'> {
    options?: ListOption[];
    value?: string | string[];
    defaultValue?: string | string[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (props, forwardRef) => {
        const id = useId();
        const {
            options = [],
            ...otherProps
        } = props;
        //
        // function onChange(value: string, option: ListOption | ListOption[]) {
        //     props.onChange?.(event);
        // }

        return (
            <UiSelect
                ref={forwardRef}
                id={id}
                labelPlacement={"outside"}
                placeholder={props.placeholder ?? ' '}
                size="sm"
                defaultSelectedKeys={props.defaultValue}
                popoverProps={{className: 'min-w-[150px] p-0.5'}}
                {...otherProps}
            >
                {options.filter(t => t.value !== undefined).map((item) => (
                    <SelectItem key={item.value as string | number} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
            </UiSelect>
            //     <AntSelect {...otherProps} id={props.id ?? id} ref={inputRef} status={errorMessage && "error"} onSelect={onChange} />
        );
    }
);
Select.displayName = "Select";
