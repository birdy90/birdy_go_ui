import {forwardRef, HTMLInputTypeAttribute} from "react";
import {BaseInputProps} from "../../";
import {Label, TextField, Input as UiInput, Text} from "react-aria-components";
import {clsx} from "clsx";
import {inputCommonClasses} from "../../constants.ts";

export interface InputProps extends BaseInputProps {
    overrideClassName?: string;
    autoFocus?: boolean;
    type?: HTMLInputTypeAttribute;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((
    {
        overrideClassName,
        className,
        label = '',
        ...props
    },
    ref
) => {
    const inputClasses = overrideClassName ?? clsx(
        inputCommonClasses(Boolean(props.errorMessage)),
        className,
    );

    return (
        <TextField>
            <div className="flex flex-col gap-1">
                {label && <Label>{label} {props.required && <span className="text-danger-500">*</span>}</Label>}
                <UiInput id={props.id} ref={ref} className={inputClasses} {...props} />
                {props.errorMessage && <Text className="text-sm text-danger-500" slot="errorMessage">{props.errorMessage}</Text>}
                {!props.errorMessage && props.description && <Text className="text-sm" slot="description">{props.description}</Text>}
            </div>
        </TextField>
    );
});
Input.displayName = "Input";
