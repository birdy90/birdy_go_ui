import {Divider} from "@nextui-org/divider";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {cloneElement, ReactNode} from "react";
import {MenuItemProps} from "../";
import {clsx} from "clsx";

export interface MenuButtonProps {
    className?: string;
    loading?: boolean;
    items: MenuItemProps[];
    children: ReactNode;
}

export const MenuButton = ({items = [], children}: MenuButtonProps) => {
    return (
        <Dropdown>
            <DropdownTrigger>{children}</DropdownTrigger>

            <DropdownMenu aria-label="">
                {items.map((item, index) => {
                    const key = item.key ?? index;

                    if (item.type === "divider" || item.type === "spacer") {
                        return (
                            <DropdownItem key={key} isReadOnly className="pointer-events-none">
                                <Divider />
                            </DropdownItem>
                        );
                    }

                    const sizedIcon = item.icon
                        ? cloneElement(item.icon, {
                              className: "h-4 w-4 fill-current",
                          })
                        : null;

                    const itemClassNames = clsx(
                        !item.onClick ? "!pointer-events-none" : "",
                        item.danger ? "text-danger" : "",
                    );

                    return (
                        <DropdownItem
                            key={key}
                            startContent={sizedIcon}
                            className={itemClassNames}
                            color={item.danger ? "danger" : "default"}
                            onClick={item.onClick}
                        >
                            {item.label}
                        </DropdownItem>
                    );
                })}
            </DropdownMenu>
        </Dropdown>
    );
};

MenuButton.displayName = "MenuButton";
