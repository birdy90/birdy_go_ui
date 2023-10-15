import {CardBody, CardHeader, Card as UiCard} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import React from "react";
import {clsx} from "clsx";

export interface CardProps extends React.HTMLAttributes<Element> {
    header?: React.ReactNode;
    children?: React.ReactNode;
}

export const Card = ({className, header, children, ...props}: CardProps) => {
    const classes = clsx("text-sm", className);

    return (
        <UiCard {...props} className={classes}>
            {header && (
                <>
                    <CardHeader>{header}</CardHeader>
                    <Divider />
                </>
            )}
            <CardBody className={header ? "p-3" : "px-3 py-1.5"}>{children}</CardBody>
        </UiCard>
    );
};
Card.displayName = "Card";
