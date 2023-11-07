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
            <BiHome width={128} />
        </div>
    ),
}

export const Default: Story = {
    args: {
        ...commonArgs,
    },
};

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
