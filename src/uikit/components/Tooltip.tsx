import {OverlayArrow, Tooltip as UiTooltip, TooltipTrigger} from "react-aria-components";
import {PropsWithChildren, ReactNode} from "react";
import {Button} from "./Button.tsx";

export interface TooltipProps extends PropsWithChildren {
    content?: ReactNode;
}

export const Tooltip = ({content, children}: TooltipProps) => {
    return (
        <TooltipTrigger>
            <Button overrideClassName="rounded">{children}</Button>
            <UiTooltip className="border border-border shadow px-2 py-1" offset={5}>
                <OverlayArrow />

                {content}
            </UiTooltip>
        </TooltipTrigger>
    );
};
