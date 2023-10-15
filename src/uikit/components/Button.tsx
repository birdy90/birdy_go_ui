import {Button as UiButton} from "@nextui-org/button";
import {cloneElement, forwardRef, HTMLAttributes, ReactElement} from "react";
import {ButtonVariants, ColorType, RadiusType} from "../";
import {clsx} from "clsx";

export interface ButtonProps extends Omit<HTMLAttributes<Element>, "ref" | "shape" | "size"> {
    color?: ColorType;
    variant?: ButtonVariants;
    icon?: ReactElement;
    disabled?: boolean;
    loading?: boolean;
    stopPropagation?: boolean;
    type?: "button" | "submit" | "reset";
    iconSize?: number;
    radius?: RadiusType;
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({color = "default", variant = "solid", loading, disabled, children, className, icon: Icon, ...props}, ref) => {
        const isIconOnly = !!Icon && !children;
        const sizedIcon = Icon
            ? cloneElement(Icon, {
                  className: "h-5 w-5 fill-current flex items-center justify-center",
              })
            : null;

        const buttonClassNames = clsx(className);

        return (
            <UiButton
                ref={ref}
                className={buttonClassNames}
                isIconOnly={isIconOnly}
                startContent={!isIconOnly && !loading && sizedIcon}
                isLoading={loading}
                isDisabled={disabled}
                color={color}
                radius="sm"
                size="sm"
                variant={variant}
                {...props}
            >
                {!loading && isIconOnly ? sizedIcon : children}
            </UiButton>
        );
    },
);

Button.displayName = "Button";
