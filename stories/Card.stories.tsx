import {Meta, StoryObj} from "@storybook/react";
import {Card} from "../src";

export default {
    title: "Components/Card",
    component: Card,
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

const commonArgs = {
    header: "What Is Hypertext?",
    children: "Hypertext is text displayed on a computer display or other electronic devices with references (hyperlinks) to other text that the reader can immediately access",
    className: 'max-w-sm',
}

export const Default: Story = {
    args: {
        ...commonArgs,
    },
};

export const CustomHeader: Story = {
    args: {
        ...commonArgs,
        header: <div className="flex flex-col items-center font-semibold"><h2>What</h2><h3>Is</h3><h4>Hypertext?</h4></div>
    },
};
