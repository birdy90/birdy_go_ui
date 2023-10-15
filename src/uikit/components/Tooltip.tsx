import {Tooltip as UiTooltip} from "@nextui-org/tooltip";
import {PropsWithChildren, ReactNode} from "react";

export interface TooltipProps extends PropsWithChildren {
    content?: ReactNode;
    isOpen?: boolean;
}

export const Tooltip = ({isOpen, content, children}: TooltipProps) => {
    return (
        <>
            <UiTooltip content={content} defaultOpen={isOpen}>
                {children}
            </UiTooltip>
        </>
    );
};
