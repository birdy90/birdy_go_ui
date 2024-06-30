import {ChangeEvent} from "react";
import {Controller, FieldError, FieldValues, Path, RegisterOptions, useFormContext} from "react-hook-form";
import {Input, InputProps} from "../Input";

export interface FormInputProps<TData extends FieldValues> extends Omit<InputProps, "name"> {
    name: Path<TData>;
    rules?: RegisterOptions;
    errors?: FieldError;
}

export function FormInput<TData extends FieldValues = FieldValues>(
    {
        name,
        onChange,
        ...props
    }: FormInputProps<TData>
) {
    const formContext = useFormContext();
    if (!formContext) {
        throw new Error('You forgot to use Form around this FormInput');
    }
    const {control} = formContext;

    const rules2 = {
            required: true,
    }

    return (
        <Controller
            name={name}
            control={control}
            rules={rules2}
            render={({field, fieldState}) => <>
                <Input
                    {...props}
                    {...field}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        field.onChange(e);
                        onChange?.(e);
                    }}
                    errorMessage={fieldState.error?.message}
                />
            </>}
        />
    );
}
