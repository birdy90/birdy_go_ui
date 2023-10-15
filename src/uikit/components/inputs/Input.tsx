import {Input as UiInput} from "@nextui-org/input";
import {forwardRef, HTMLInputTypeAttribute, useId} from "react";
import {BaseInputProps} from "../../";

export interface InputProps extends BaseInputProps {
    autoFocus?: boolean;
    type?: HTMLInputTypeAttribute;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const id = useId();

    return (
        <UiInput
            {...props}
            isRequired={props.required}
            labelPlacement="outside"
            placeholder={props.placeholder ?? " "}
            id={props.id ?? id}
            ref={ref as never}
            size="sm"
        />
    );
});
Input.displayName = "Input";
