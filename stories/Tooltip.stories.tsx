import {Meta, StoryObj} from "@storybook/react";
import {BiHome} from "react-icons/bi";
import {Tooltip} from "../src";

export default {
    title: "Components/Tooltip",
    component: (args) => {
        const trigger = <span className="border-0 border-b-2 border-dashed border-gray-500">highlighted</span>;

        return (
            <div className="flex gap-1">
                Look at the
                <Tooltip {...args}>{trigger}</Tooltip>
                text
            </div>
        );
    },
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        content: (
            <div className="flex gap-2">
                Icon <BiHome className="shrink-0" width={24} /> inside
            </div>
        ),
    },
};
