import {OverlayArrow, Tooltip as UiTooltip, TooltipTrigger} from "react-aria-components";
import {PropsWithChildren, ReactNode} from "react";
import {Button} from "./buttons";
import {twMerge} from "tailwind-merge";
import {clsx} from "clsx";
import {focusBackgroundClasses} from "../constants";

export interface TooltipProps extends PropsWithChildren {
    content?: ReactNode;
    openDelay?: number;
    className?: string;
    triggerClassName?: string;
}

export const Tooltip = (
    {
        content,
        openDelay = 500,
        className,
        children,
        ...props
    }: TooltipProps
) => {
    const triggerClasses = twMerge(clsx(
        'px-1',
        props.triggerClassName,
        focusBackgroundClasses,
    ))

    const toolTipClasses = twMerge(clsx(
        'rounded shadow px-2 py-1',
        'border border-border dark:border-border-dark',
        'bg-white dark:bg-gray-900',
        className,
    ));

    return (
        <TooltipTrigger delay={openDelay}>
            <Button unstyled className={triggerClasses}>{children}</Button>
            <UiTooltip className={toolTipClasses} offset={5}>
                <OverlayArrow />

                {content}
            </UiTooltip>
        </TooltipTrigger>
    );
};
