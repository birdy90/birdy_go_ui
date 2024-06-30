import {Meta, StoryObj} from "@storybook/react";
import {BiHome, BiTrash} from "react-icons/bi";
import {MenuButton} from "../src";

export default {
    title: "Components/Button",
    component: MenuButton,
} as Meta<typeof MenuButton>;

type Story = StoryObj<typeof MenuButton>;

export const CommonMenuButton: Story = {
    args: {
        trigger: "Menu button",
        children: <>
            <MenuButton.Item id="1">Toggle alert</MenuButton.Item>
            <MenuButton.Item href="https://example.com">Second item</MenuButton.Item>
            <MenuButton.Divider />
            <MenuButton.Item id="del" className="text-red-500 dark:text-red-500">
                <BiTrash /> Delete
            </MenuButton.Item>
        </>,
    },
};

export const IconMenuButton: Story = {
    args: {
        ...CommonMenuButton.args,
        iconButton: true,
        trigger: <BiHome />
    },
};