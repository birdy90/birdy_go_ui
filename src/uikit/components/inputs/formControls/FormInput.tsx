import {ChangeEvent} from "react";
import {Controller, FieldValues, Path, RegisterOptions, useFormContext} from "react-hook-form";
import {Input, InputProps} from "../";

interface FormInputProps<TData extends FieldValues> extends Omit<InputProps, "name"> {
    name: Path<TData>;
    rules?: RegisterOptions;
}

export function FormInput<TData extends FieldValues = FieldValues>({
    name,
    rules,
    onChange,
    ...props
}: FormInputProps<TData>) {
    const {control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({field}) => {
                function internalChange(e: ChangeEvent<HTMLInputElement>) {
                    field.onChange(e);
                    onChange?.(e);
                }

                return <Input {...props} {...field} onChange={internalChange} />;
            }}
        />
    );
}
