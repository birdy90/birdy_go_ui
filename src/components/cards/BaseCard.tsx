import React from "react";
import {clsx} from "clsx";
import { Divider } from "../Divider";
import {twMerge} from "tailwind-merge";

export interface CardProps extends React.HTMLAttributes<Element> {
    header?: React.ReactNode;
    children?: React.ReactNode;
}

export const BaseCard = ({className, header, children, ...props}: CardProps) => {
    const cardClasses = twMerge(clsx(
        'rounded-lg px-3 py-2',
        'bg-white dark:bg-gray-800',
        'border border-border dark:border-border-dark',
        className,
    ));

    return (
        <div {...props} className={cardClasses}>
            {header && (
                <>
                    {typeof header === 'string' ? <div role="heading" className="font-semibold">{header}</div> : header}
                    <Divider />
                </>
            )}
            <div>
                {children}
            </div>
        </div>
    );
};
BaseCard.displayName = "BaseCard";
