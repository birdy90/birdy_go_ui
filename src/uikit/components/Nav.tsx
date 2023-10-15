import {Divider} from "@nextui-org/divider";
import {Fragment} from "react";
import {Button, MenuItemProps} from "../";
import {clsx} from "clsx";

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
        props.className,
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
                    const buttonClassNames = clsx(
                        "h-8",
                        item.icon && !item.label && "w-8 min-w-0 px-0",
                        props.vertical ? "justify-start" : "",
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
                            variant={props.active ? "flat" : "light"}
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
