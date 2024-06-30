import {MenuTrigger, Popover, Menu, MenuItem, Separator} from 'react-aria-components';
import {PropsWithChildren, ReactElement, ReactNode} from "react";
import {Card} from "../cards";
import {Button, ButtonProps} from "./Button";
import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {focusBackgroundClasses} from "../../constants";

export interface MenuButtonProps extends ButtonProps {
    trigger?: ReactNode;
    loading?: boolean;
    iconButton?: never;
    onItemSelect?: (id: string) => void
}

export interface IconMenuButtonProps extends Omit<MenuButtonProps, 'iconButton'> {
    trigger?: ReactElement;
    iconButton?: boolean;
}

export type MenuButtonItemProps = PropsWithChildren & {
    className?: string;
} & ({
    id: string;
} | {
    href: string;
})

const MenuButtonItem = ({className, ...props}: MenuButtonItemProps) => {
    const menuItemClasses = twMerge(clsx(
        'flex',
        focusBackgroundClasses,
    ));

    const itemClasses = twMerge(clsx(
        'px-2 w-full justify-start',
        'cursor-pointer text-back-dark dark:text-back',
        '!outline-none',
        'bg-transparent dark:bg-transparent hover:bg-transparent active:bg-transparent',
        className,
    ));

    return <MenuItem className={menuItemClasses} {...props}>
        <Button className={itemClasses}>
            {props.children}
        </Button>
    </MenuItem>
}
MenuButtonItem.displayName = "MenuButtonItem";

export const MenuButton = ({children, ...props}: MenuButtonProps | IconMenuButtonProps) => {
    const buttonIcon= props.iconButton ? props.trigger : undefined;
    const buttonChildren = props.iconButton ? null : props.trigger;

    return (
        <MenuTrigger>
            <Button {...props} icon={buttonIcon}>
                {buttonChildren}
            </Button>

            <Popover>
                <Card className="!p-1">
                    <Menu className="outline-none">
                        {children}
                    </Menu>
                </Card>
            </Popover>
        </MenuTrigger>
    );
};
MenuButton.displayName = "MenuButton";
MenuButton.Item = MenuButtonItem;

MenuButton.Divider = () => <Separator className="border-b border-border dark:border-border-dark my-1" />;


