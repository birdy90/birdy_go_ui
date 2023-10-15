import {Meta, StoryObj} from "@storybook/react";
import {BiHome, BiTrash} from "react-icons/bi";
import {Button, MenuButton} from "../src";

export default {
    title: "Components/Button",
    component: MenuButton,
} as Meta<typeof MenuButton>;

type Story = StoryObj<typeof MenuButton>;

export const CommonMenuButton: Story = {
    args: {
        children: <Button>Menu button</Button>,
        items: [
            {
                label: "First item",
            },
            {
                label: "Second item",
            },
            {
                type: "divider",
            },
            {
                label: "Third item",
            },
        ],
    },
};

export const IconMenuButton: Story = {
    args: {
        children: <Button icon={<BiHome />} />,
        items: [
            {
                label: "First item",
            },
            {
                label: "Second item",
            },
            {
                type: "divider",
            },
            {
                label: "Delete",
                icon: <BiTrash />,
                danger: true,
            },
        ],
    },
};

export const MenuButtonClickHandlers: Story = {
    args: {
        children: <Button icon={<BiHome />} />,
        items: [
            {
                label: "First item",
                onClick: () => console.log("First item clicked"),
            },
            {
                label: "Delete",
                icon: <BiTrash />,
                danger: true,
                onClick: () => console.log("Deleted"),
            },
        ],
    },
};
