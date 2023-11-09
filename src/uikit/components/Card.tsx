import React from "react";
import {clsx} from "clsx";
import { ColorType } from "../types";
import { Divider } from "./";
import {twMerge} from "tailwind-merge";

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

    const cardClasses = overrideClassName ?? twMerge(clsx(
        'rounded-lg px-3 py-2 shadow',
        color && colorMapping[color],
        !color && 'border dark:border-border-dark border-border',
        className,
    ));

    const dividerClasses = clsx(
        color !== 'white' && 'border-b-border-dark/20',
    );

    return (
        <div {...props} className={cardClasses}>
            {header && (
                <>
                    <div role="heading" className="font-semibold">{header}</div>
                    <Divider className={dividerClasses} />
                </>
            )}
            <div>
                {children}
            </div>
        </div>
    );
};
Card.displayName = "Card";
