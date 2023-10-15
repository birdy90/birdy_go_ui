import {ChangeEvent} from "react";
import {Control, Controller, FieldValues, Path, RegisterOptions} from "react-hook-form";
import {Input, InputProps} from "../";

interface FormInputProps<TData extends FieldValues> extends Omit<InputProps, "name"> {
    name: Path<TData>;
    control: Control<TData>;
    rules?: RegisterOptions;
}

export function FormInput<TData extends FieldValues = FieldValues>({
    name,
    control,
    rules,
    onChange,
    ...props
}: FormInputProps<TData>) {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({field}) => {
                function internalChange(e: ChangeEvent) {
                    field.onChange(e);
                    onChange?.(e);
                }

                return <Input {...props} {...field} onChange={internalChange} />;
            }}
        />
    );
}
