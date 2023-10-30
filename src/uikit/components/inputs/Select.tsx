import {forwardRef, useId} from "react";
import {BaseInputProps, ListOption} from "../../";
import {inputCommonClasses} from "../../constants.ts";
import {clsx} from "clsx";

export interface SelectProps extends Omit<BaseInputProps, 'value' | 'defaultValue'> {
    className?: string;
    overrideClassName?: string;
    options?: ListOption[];
    value?: string | string[];
    defaultValue?: string | string[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (props, forwardRef) => {
        const id = useId();
        const {
            overrideClassName,
            className,
            label,
            options = [],
            ...otherProps
        } = props;

        const selectButtonClasses = overrideClassName ?? clsx(
            'flex items-center w-full justify-between',
            inputCommonClasses(Boolean(props.errorMessage)),
            className,
        );

        return (
            <div className="flex flex-col gap-1">
                {label && <label>{label} {props.required && <span className="text-danger-500">*</span>}</label>}
                <select ref={forwardRef} className={selectButtonClasses} {...otherProps} id={props.id ?? id}>
                    {options.filter(t => t.value !== undefined).map((item) => (
                        <option key={item.value as string | number} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>
                {props.errorMessage && <div className="text-sm text-danger-500" slot="errorMessage">{props.errorMessage}</div>}
                {!props.errorMessage && props.description && <div className="text-sm" slot="description">{props.description}</div>}
            </div>

            // <UiSelect placeholder={props.placeholder} className="relative">
            //     <Label>{props.label}</Label>
            //     <Button overrideClassName={selectButtonClasses}>
            //         <SelectValue />
            //         <div className="flex gap-2 items-center">
            //             <SelectClearButton />
            //             <BsChevronDown />
            //         </div>
            //     </Button>
            //     {/*{props.errorMessage && <Text className="text-sm text-danger-500" slot="errorMessage">{props.errorMessage}</Text>}*/}
            //     {/*{!props.errorMessage && props.description && <Text className="text-sm" slot="description">{props.description}</Text>}*/}
            //     <Popover className="shadow rounded border-border min-w-[180px] max-h-5 overflow-auto">
            //         <ListBox className="focus-visible:outline-none p-1" items={options.map(t => ({id: t.value, name: t.label}))}>
            //             {(item) => <Item className="px-2 py-1 cursor-pointer focus-visible:outline-none focus-visible:bg-border rounded">{item.name}</Item>}
            //         </ListBox>
            //     </Popover>
            // </UiSelect>

            // <UiSelect
            //     ref={forwardRef}
            //     id={id}
            //     labelPlacement={"outside"}
            //     placeholder={props.placeholder ?? ' '}
            //     size="sm"
            //     defaultSelectedKeys={props.defaultValue}
            //     popoverProps={{className: 'min-w-[150px] p-0.5'}}
            //     {...otherProps}
            // >
            //     {options.filter(t => t.value !== undefined).map((item) => (
            //         <SelectItem key={item.value as string | number} value={item.value}>
            //             {item.label}
            //         </SelectItem>
            //     ))}
            // </UiSelect>
        );
    }
);
Select.displayName = "Select";
