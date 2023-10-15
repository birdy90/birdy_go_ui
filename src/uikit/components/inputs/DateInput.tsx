"use client";

import {forwardRef} from "react";
import {BaseInputProps} from "../../";
import {Input} from "../";

export interface DateInputProps extends BaseInputProps {
    showTime?: boolean;
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>((props, ref) => {
    return <Input {...props} ref={ref} type="datetime-local" />;
});
DateInput.displayName = "DateInput";
