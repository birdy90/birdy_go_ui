import {PropsWithChildren} from "react";
import {Label as UiLabel, Text as UiText} from "react-aria-components";

export interface InputWrapperProps extends PropsWithChildren {
    label?: string;
    description?: string;
    required?: boolean;
    errorMessage?: string;
}

export const InputWrapper = (props: InputWrapperProps) => {
    const {label, children, errorMessage, description, required} = props;

    return <>
        {label && (
            <UiLabel className="mb-0.5">
                {label} {required && <span className="text-red-500">*</span>}
            </UiLabel>
        )}

        {children}

        {errorMessage ? (
            <UiText className="text-sm text-red-500" slot="errorMessage">{errorMessage}</UiText>
        ) : description && (
            <UiText className="text-sm opacity-50" slot="description">{description}</UiText>
        )}
    </>
}