import {Button as UiButton} from "react-aria-components";
import {cloneElement, HTMLAttributes, ReactElement} from "react";
import {ButtonVariants, ColorType, Loader} from "../";
import {clsx} from "clsx";
import {focusOutlineClasses} from "../constants.ts";

export interface ButtonProps extends Omit<HTMLAttributes<Element>, "shape" | "size"> {
    overrideClassName?: string;
    color?: ColorType;
    variant?: ButtonVariants;
    icon?: ReactElement;
    disabled?: boolean;
    small?: boolean;
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
        small,
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
        primary: clsx(
            'bg-primary-400 border-primary-400 text-primary-500',
            'hover:bg-primary-500 hover:border-primary-500',
            'active:bg-primary-600 active:border-primary-600',
        ),
        secondary: clsx(
            'bg-secondary-400 border-secondary-400 text-secondary-500',
            'hover:bg-secondary-500 hover:border-secondary-500',
            'active:bg-secondary-600 active:border-secondary-600',
        ),
        danger: clsx(
            'bg-danger-400 border-danger-400 text-danger-500',
            'hover:bg-danger-500 hover:border-danger-500',
            'active:bg-danger-600 active:border-danger-600',
        ),
        default: clsx(
            'bg-gray-200 border-gray-200 text-gray-900',
            'hover:bg-gray-300 hover:border-gray-300',
            'active:bg-gray-400 active:border-gray-400',
        ),
    };

    const buttonVariantClasses: Record<ButtonVariants, string> = {
        solid: '!text-gray-950',
        bordered: 'border-2 bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-20',
        light: 'bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-20',
    };

    const buttonClasses = overrideClassName !== undefined ? clsx(
        overrideClassName,
        focusOutlineClasses,
    ) : clsx(
        'h-10 whitespace-nowrap',
        focusOutlineClasses,
        buttonColorClasses[color],
        buttonVariantClasses[variant],
        'flex items-center justify-center gap-2',
        rounded ? 'rounded-full' : 'rounded',
        isIconOnly ? 'w-10' : 'px-4',
        small && (isIconOnly ? 'w-8' : 'p-2'),
        small && 'h-8',
        isDisabled && 'opacity-50 pointer-events-none',
        className,
    );

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
