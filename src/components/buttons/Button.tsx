import {Button as UiButton} from "react-aria-components";
import {cloneElement, HTMLAttributes, ReactElement} from "react";
import {Loader} from "../Loader";
import {clsx} from "clsx";
import {focusOutlineClasses} from "../../constants";
import {twMerge} from "tailwind-merge";
import {ResettableClasses} from "../../types";

export interface ButtonProps extends Omit<HTMLAttributes<Element>, "shape" | "size">, ResettableClasses {
    icon?: ReactElement;
    iconClassName?: string;
    disabled?: boolean;
    loading?: boolean;
    stopPropagation?: boolean;
    type?: "button" | "submit" | "reset";
}

export const Button = (buttonProps: ButtonProps) => {
    const {
        loading,
        disabled,
        children,
        className,
        unstyled,
        icon: Icon,
        iconClassName,
        ...props
    } = buttonProps;

    const isIconOnly = !!Icon && !children;
    const isDisabled = disabled || loading;
    const sizedIcon = Icon
        ? cloneElement(Icon, {
            className: twMerge(clsx(
                "h-5 w-5 fill-current flex items-center justify-center",
                iconClassName,
            )),
        })
        : null;

    const buttonClasses = unstyled ? className : twMerge(clsx(
        'flex items-center justify-center gap-2 h-8 rounded',
        isIconOnly ? 'w-8' : 'px-4',
        'whitespace-nowrap transition-colors',
        'text-gray-50',
        'bg-gray-400 dark:bg-gray-700 hover:bg-gray-500 active:bg-gray-600',
        focusOutlineClasses,
        isDisabled && 'opacity-50 pointer-events-none',
        className,
    ));

    return (
        <UiButton
            className={buttonClasses}
            isDisabled={isDisabled}
            {...props}
        >
            {isIconOnly && !loading && sizedIcon}
            {!isIconOnly && <>{sizedIcon}{children}</>}
            {loading && <Loader />}
        </UiButton>
    );
}

Button.displayName = "Button";
