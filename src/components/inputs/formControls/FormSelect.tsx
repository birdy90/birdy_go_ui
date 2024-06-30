import {Controller, FieldValues, Path, RegisterOptions, useFormContext} from "react-hook-form";
import {Select, SelectDataType, SelectProps} from "../Select";

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
    const formContext = useFormContext();
    if (!formContext) {
        throw new Error('You forgot to use Form around this FormInput');
    }
    const {control } = formContext;

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({field}) => (
                <Select {...props} {...field} onChange={(e: SelectDataType) => {
                    field.onChange(e);
                    onChange?.(e);
                }} />
            )}
        />
    );
}
