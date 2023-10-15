import {ChangeEvent} from "react";
import {Control, Controller, FieldValues, Path, RegisterOptions} from "react-hook-form";
import {Select, SelectProps} from "../";

interface FormSelectProps<TData extends FieldValues> extends Omit<SelectProps, "name"> {
    name: Path<TData>;
    control: Control<TData>;
    rules?: RegisterOptions;
}

export function FormSelect<TData extends FieldValues = FieldValues>({
    name,
    control,
    rules,
    onChange,
    ...props
}: FormSelectProps<TData>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({field}) => {
                function internalChange(e: ChangeEvent) {
                    field.onChange(e as never);
                    onChange?.(e);
                }

                return <Select {...props} {...field} onChange={internalChange} />;
            }}
        />
    );
}
