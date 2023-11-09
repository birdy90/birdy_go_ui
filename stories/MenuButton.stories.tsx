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
        children: [
            <MenuButton.Item>First item</MenuButton.Item>,
            <MenuButton.Item>Second item</MenuButton.Item>,
            <MenuButton.Divider />,
            <MenuButton.Item>
                <div className="text-danger-500 flex gap-2 items-center">
                    <BiTrash /> Delete
                </div>
            </MenuButton.Item>,
        ],
    },
};

export const IconMenuButton: Story = {
    args: {
        ...CommonMenuButton.args,
        color: 'primary',
        rounded: true,
        iconButton: true,
        trigger: <BiHome />
    },
};