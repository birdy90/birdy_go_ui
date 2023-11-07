import {Button as UiButton} from "react-aria-components";
import {cloneElement, HTMLAttributes, ReactElement} from "react";
import {ButtonVariants, ColorType, Loader} from "../";
import {clsx} from "clsx";
import {focusOutlineClasses} from "../constants.ts";
import {twMerge} from "tailwind-merge";

export interface ButtonProps extends Omit<HTMLAttributes<Element>, "shape" | "size"> {
    overrideClassName?: string;
    color?: ColorType;
    variant?: ButtonVariants;
    icon?: ReactElement;
    disabled?: boolean;
    large?: boolean;
    rounded?: boolean;
    loading?: boolean;
    stopPropagation?: boolean;
    type?: "button" | "submit" | "reset";
}

export const Button = (buttonProps: ButtonProps) => {
    const {
        overrideClassName,
        color = "default",
        variant = "solid",
        rounded,
        loading,
        large,
        disabled,
        children,
        className,
        icon: Icon,
        ...props
    } = buttonProps;

    const isIconOnly = !!Icon && !children;
    const isDisabled = disabled || loading;
    const sizedIcon = Icon
        ? cloneElement(Icon, {
            className: "h-5 w-5 fill-current flex items-center justify-center",
        })
        : null;

    const buttonColorClasses: Record<ColorType, string> = {
        white: '',
        primary: clsx(
            'dark:bg-primary-700 dark:text-primary-400',

            'bg-primary-400 border-primary-400 text-primary-500',
            'hover:bg-primary-500 hover:border-primary-500',
            'active:bg-primary-600 active:border-primary-600',
        ),
        secondary: clsx(
            'dark:bg-secondary-600 dark:text-secondary-400',
            'dark:hover:bg-secondary-700',
            'dark:active:bg-secondary-800',

            'bg-secondary-400 border-secondary-500 text-secondary-500',
            'hover:bg-secondary-500 hover:border-secondary-600',
            'active:bg-secondary-600 active:border-secondary-700',
        ),
        danger: clsx(
            'dark:bg-danger-600 dark:text-danger-400',
            'dark:hover:bg-danger-700',
            'dark:active:bg-danger-800',

            'bg-danger-500 border-danger-500 text-danger-600',
            'hover:bg-danger-600 hover:border-danger-600',
            'active:bg-danger-700 active:border-danger-700',
        ),
        default: clsx(
            'dark:bg-gray-700 dark:text-gray-50',
            'bg-gray-400 border-gray-500 text-gray-900',
            'hover:bg-gray-500 hover:border-gray-500',
            'active:bg-gray-600 active:border-gray-600',
        ),
    };

    const buttonVariantClasses: Record<ButtonVariants, string> = {
        solid: '!text-white',
        bordered: 'border-2 !bg-opacity-0 hover:!bg-opacity-10 active:!bg-opacity-20',
        light: '!bg-opacity-0 hover:!bg-opacity-10 active:!bg-opacity-20',
    };

    const buttonClasses = twMerge(overrideClassName !== undefined ? clsx(
        overrideClassName,
        focusOutlineClasses,
    ) : clsx(
        'whitespace-nowrap transition-colors',
        focusOutlineClasses,
        buttonColorClasses[color],
        buttonVariantClasses[variant],
        'flex items-center justify-center gap-2',
        rounded ? 'rounded-full' : 'rounded',
        isIconOnly ? 'w-8' : 'px-4',
        large && (isIconOnly ? '!w-10' : ''),
        large ? 'h-10' : 'h-8',
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
