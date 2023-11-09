import {MenuTrigger, Popover, Menu, Item, Separator} from 'react-aria-components';
import {PropsWithChildren, ReactElement, ReactNode} from "react";
import {Button, ButtonProps, Card} from "../";
import {clsx} from "clsx";

export interface MenuButtonProps extends ButtonProps {
    trigger?: ReactNode;
    loading?: boolean;
    iconButton?: never;
}

export interface IconMenuButtonProps extends Omit<MenuButtonProps, 'iconButton'> {
    trigger?: ReactElement;
    iconButton?: boolean;
}

export interface MenuButtonItemProps extends PropsWithChildren {
    className?: string;
}

const MenuButtonItem = (props: MenuButtonItemProps) => {
    const itemClasses = clsx(
        'cursor-pointer px-2 py-1 rounded',
        'focus-visible:outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700',
        props.className,
    );

    return <Item className={itemClasses}>
        <div>
            {props.children}
        </div>
    </Item>
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


