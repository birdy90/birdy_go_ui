import {forwardRef} from "react";
import {BaseInputProps} from "../../types";
import {DateField as UiDateField, DateSegment as UiDateSegment, DateInput as UiDateInput} from "react-aria-components";
import {inputCommonClasses} from "../../constants";
import {cn} from "../../utils/cn";
import {InputWrapper} from "./InputWrapper";

export interface DateInputProps extends BaseInputProps {
    showTime?: boolean;
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>((inputProps, ref) => {
    const {
        className,
        label = '',
        errorMessage = '',
        description,
        ...props
    } = inputProps;

    const wrapperClasses = cn(
        'flex flex-col w-full',
    );

    const inputClasses = props.unstyled ? className : cn(
        inputCommonClasses(Boolean(errorMessage)),
        className,
    );
    return (
        <UiDateField className={wrapperClasses}>
            <InputWrapper label={label} description={description} errorMessage={errorMessage} required={props.required}>
                <UiDateInput ref={ref} className={inputClasses}>
                    {(segment) => <UiDateSegment className={cn(segment.isPlaceholder && 'opacity-40')}  segment={segment} />}
                </UiDateInput>
            </InputWrapper>
        </UiDateField>
    );
});
DateInput.displayName = "DateInput";
