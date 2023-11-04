import {ChangeEvent} from "react";
import {Controller, FieldValues, Path, RegisterOptions, useFormContext} from "react-hook-form";
import {Select, SelectProps} from "../";

interface FormSelectProps<TData extends FieldValues> extends Omit<SelectProps, "name"> {
    name: Path<TData>;
    rules?: RegisterOptions;
}

export function FormSelect<TData extends FieldValues = FieldValues>({
    name,
    rules,
    onChange,
    ...props
}: FormSelectProps<TData>) {
    const {control} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({field}) => {
                function internalChange(e: ChangeEvent<HTMLInputElement>) {
                    field.onChange(e as never);
                    onChange?.(e);
                }

                return <Select {...props} {...field} onChange={internalChange} />;
            }}
        />
    );
}
