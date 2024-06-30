'use client';

import {forwardRef, HTMLInputTypeAttribute} from "react";
import {BaseInputProps} from "../../types";
import {TextField as UiTextField, Input as UiInput} from "react-aria-components";
import {clsx} from "clsx";
import {inputCommonClasses} from "../../constants";
import {twMerge} from "tailwind-merge";
import {InputWrapper} from "./InputWrapper";

export interface InputProps extends BaseInputProps {
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
        className,
        label = '',
        errorMessage = '',
        description,
        ...props
    } = inputProps;

    const wrapperClasses = twMerge(clsx(
        'flex flex-col w-full',
        wrapperClassName,
    ));

    const inputClasses = twMerge(clsx(
        inputCommonClasses(Boolean(errorMessage)),
        className,
    ));

    return (
        <UiTextField className={wrapperClasses}>
            <InputWrapper label={label} description={description} errorMessage={errorMessage} required={props.required}>
                <UiInput id={props.id} ref={ref} className={inputClasses} {...props} />
            </InputWrapper>
        </UiTextField>
    );
});
Input.displayName = "Input";
