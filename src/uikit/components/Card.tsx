import React from "react";
import {clsx} from "clsx";
import { ColorType } from "../types";
import { Divider } from "./";

export interface CardProps extends React.HTMLAttributes<Element> {
    color?: ColorType;
    overrideClassName?: string;
    header?: React.ReactNode;
    children?: React.ReactNode;
}

export const Card = ({className, overrideClassName, header, children, color = 'white', ...props}: CardProps) => {
    const colorMapping: Record<ColorType, string> = {
        white: "bg-white dark:bg-gray-800",
        default: "bg-gray-100 dark:bg-gray-500/25",
        primary: "bg-primary-100 dark:bg-primary-500/25",
        secondary: "bg-secondary-100 dark:bg-secondary-500/25",
        danger: "bg-danger-200 dark:bg-danger-500/30",
    };

    const cardClasses = overrideClassName ?? clsx(
        'rounded-lg border dark:border-border-dark border-border px-3 py-2 shadow',
        color && colorMapping[color],
        className,
    );

    return (
        <div {...props} className={cardClasses}>
            {header && (
                <>
                    <div role="heading" className="font-semibold">{header}</div>
                    <Divider />
                </>
            )}
            <div>
                {children}
            </div>
        </div>
    );
};
Card.displayName = "Card";
