import {PropsWithChildren} from "react";
import {FormProvider, useForm, UseFormProps} from "react-hook-form";

export interface FormProps extends PropsWithChildren {
    className?: string;
    defaultValues?: UseFormProps['defaultValues'];
    onSubmit?: (data: unknown) => void;
}

export const Form = (props: FormProps) => {
    const methods = useForm({
        defaultValues: props.defaultValues,
    });

    const onSubmit = (data: unknown) => {
        props.onSubmit?.(data);
    }

    return (
        <FormProvider {...methods}>
            <form className={props.className} onSubmit={methods.handleSubmit(onSubmit)}>
                {props.children}
            </form>
        </FormProvider>
    )
}