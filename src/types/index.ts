import {ColumnDef, ColumnSort} from "@tanstack/react-table";
import {AriaAttributes, ChangeEvent, FocusEvent, PropsWithChildren, ReactElement, ReactNode} from "react";

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

export interface BaseInputProps extends PropsWithChildren, AriaAttributes, ResettableClasses {
    id?: string;
    className?: string;
    disabled?: boolean;
    label?: string;
    description?: string;
    errorMessage?: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
}

export interface ListOption {
    label?: string;
    value?: string | number;
}

export interface ResettableClasses {
    unstyled?: boolean;
}