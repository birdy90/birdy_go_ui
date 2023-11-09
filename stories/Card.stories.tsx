import {Meta, StoryObj} from "@storybook/react";
import {BiHome} from "react-icons/bi";
import {Card, ColorTypeValues} from "../src";

export default {
    title: "Components/Card",
    component: Card,
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

const commonArgs = {
    header: "Card title",
    children: (
        <div className="flex justify-center">
            <BiHome className="h-6" />
        </div>
    ),
}

export const Colors: Story = {
    args: {
        ...commonArgs,
    },
    render: (args) => {
        return <div className="flex flex-wrap gap-2">
            {ColorTypeValues.map(color => {
                return <Card {...args} color={color} className="w-96" />
            })}
        </div>;
    },
};
