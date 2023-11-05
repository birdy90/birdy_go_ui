import {forwardRef, HTMLInputTypeAttribute} from "react";
import {BaseInputProps} from "../../";
import {Label, TextField, Input as UiInput, Text} from "react-aria-components";
import {clsx} from "clsx";
import {inputCommonClasses} from "../../constants.ts";

export interface InputProps extends BaseInputProps {
    overrideClassName?: string;
    wrapperClassName?: string;
    autoFocus?: boolean;
    type?: HTMLInputTypeAttribute;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((
    inputProps,
    ref
) => {
    const {
        wrapperClassName,
        large = false,
        overrideClassName,
        className,
        label = '',
        errorMessage = '',
        ...props
    } = inputProps;

    const inputClasses = overrideClassName ?? clsx(
        inputCommonClasses(Boolean(errorMessage), large),
        className,
    );

    return (
        <TextField className={wrapperClassName}>
            <div className="flex flex-col gap-1 w-full">
                {label && <Label>{label} {props.required && <span className="text-danger-500">*</span>}</Label>}

                <UiInput id={props.id} ref={ref} className={inputClasses} {...props} />

                {errorMessage && <Text className="text-sm text-danger-500" slot="errorMessage">{errorMessage}</Text>}
                {!errorMessage && props.description && <Text className="text-sm" slot="description">{props.description}</Text>}
            </div>
        </TextField>
    );
});
Input.displayName = "Input";
