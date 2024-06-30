import {Fragment} from "react";
import {Divider} from "./Divider";
import {Button} from "./buttons/Button";
import {clsx} from "clsx";
import {MenuItemProps} from "../types";

export interface NavProps {
    className?: string;
    vertical?: boolean;
    items: MenuItemProps[];
    active?: boolean;
    onGoTo?: (url: string) => void;
}

export const Nav = (props: NavProps) => {
    const wrapperClassNames = clsx(
        "relative flex gap-1",
        props.vertical ? "flex-col" : "h-10 py-1",
    );

    return (
        <div className={wrapperClassNames}>
            {props.items.map((item, index) => {
                const key = item.key ?? index;

                if (item.type === "divider") {
                    return <Divider key={key} orientation={props.vertical ? "horizontal" : "vertical"} />;
                } else if (item.type === "spacer") {
                    return props.vertical ? null : <div className="grow" key={key} />;
                } else if (typeof item.label === "object") {
                    return <Fragment key={key}>{item.label}</Fragment>;
                } else {
                    const isIconOnly = item.icon && !item.label;
                    const buttonClassNames = clsx(
                        "h-8",
                        isIconOnly ? "w-8 min-w-0 px-0" : "flex !justify-start px-1.5",
                    );

                    const onClickHandler = () => {
                        item.onClick?.();

                        if (item.link) {
                            props.onGoTo?.(item.link);
                        }
                    };

                    return (
                        <Button
                            key={key}
                            className={buttonClassNames}
                            variant={props.active ? "solid" : "light"}
                            color="default"
                            icon={item.icon}
                            onClick={onClickHandler}
                        >
                            {item.label}
                        </Button>
                    );
                }
            })}
        </div>
    );
};
