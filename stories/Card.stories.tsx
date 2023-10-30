import {Meta, StoryObj} from "@storybook/react";
import {BiHome} from "react-icons/bi";
import {Card} from "../src";

export default {
    title: "Components/Card",
    component: Card,
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: (
            <div className="flex justify-center">
                <BiHome width={128} />
            </div>
        ),
    },
};

export const WithTitle: Story = {
    args: {
        header: "Card title",
        children: (
            <div className="flex items-center gap-2">
                Icon is here:
                <BiHome width={128} />
            </div>
        ),
    },
};
