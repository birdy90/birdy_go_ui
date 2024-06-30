import {Meta, StoryObj} from "@storybook/react";
import {Alert} from "../src";

export default {
    title: "Components/Alert",
    component: Alert,
} as Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    args: {
        children: "Some alert description text",
    },
};

export const WithTitle: Story = {
    args: {
        header: "Alert title",
        children: "Some alert description text",
    },
};