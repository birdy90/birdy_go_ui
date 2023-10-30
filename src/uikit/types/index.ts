import {ColumnDef, ColumnSort} from "@tanstack/react-table";
import {AriaAttributes, ChangeEvent, FocusEvent, PropsWithChildren, ReactElement, ReactNode} from "react";

export const ColorTypeValues = ["default", "primary", "secondary", "danger"] as const;
export const ButtonVariantValues = ["solid", "bordered", "light"] as const;

export type ColorType = (typeof ColorTypeValues)[number];
export type ButtonVariants = (typeof ButtonVariantValues)[number];

export interface MenuItemProps {
    key?: string;
    label?: ReactNode;
    link?: string;
    type?: "divider" | "spacer";
    danger?: boolean;
    icon?: ReactElement;
    onClick?: () => void;
}

export interface TableProps<T> {
    className?: string;
    data: T[];
    columns: ColumnDef<T>[];
    loading?: boolean;
    initialSort?: ColumnSort;
}

export interface BaseControlProps extends PropsWithChildren, AriaAttributes {
    id?: string;
    className?: string;
    disabled?: boolean;
}

export interface BaseInputProps extends BaseControlProps {
    label?: string;
    description?: string;
    errorMessage?: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: ChangeEvent) => void;
    onFocus?: (e: FocusEvent) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
}

export interface ListOption {
    label?: string;
    value?: string | number;
}
