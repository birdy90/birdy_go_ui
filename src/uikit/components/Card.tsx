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

export const Card = ({className, overrideClassName, header, children, color, ...props}: CardProps) => {
    const colorMapping: Record<ColorType, string> = {
        default: "bg-gray-100",
        primary: "bg-primary-100",
        secondary: "bg-secondary-100",
        danger: "bg-danger-100",
    };

    const cardClasses = overrideClassName ?? clsx(
        'rounded-lg border border-border px-3 py-2 shadow',
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
