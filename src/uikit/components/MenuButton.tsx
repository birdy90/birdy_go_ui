import {MenuTrigger, Popover, Menu, Item, Separator} from 'react-aria-components';
import { PropsWithChildren, ReactNode } from "react";
import {Button, Card} from "../";
import {clsx} from "clsx";

export interface MenuButtonProps extends PropsWithChildren {
    className?: string;
    trigger?: ReactNode;
    loading?: boolean;
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

export const MenuButton = (props: MenuButtonProps) => {
    return (
        <MenuTrigger>
            <Button className={props.className} loading={props.loading}>
                {props.trigger}
            </Button>

            <Popover>
                <Card className="!p-1">
                    <Menu className="outline-none">
                        {props.children}
                    </Menu>
                </Card>
            </Popover>
        </MenuTrigger>
    );
};
MenuButton.displayName = "MenuButton";
MenuButton.Item = MenuButtonItem;

MenuButton.Divider = () => <Separator className="border-b border-border dark:border-border-dark my-1" />;


