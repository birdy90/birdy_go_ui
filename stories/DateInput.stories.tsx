import {Meta, StoryObj} from "@storybook/react";
import {DateInput} from "../src";

export default {
    title: "Components/Input",
    component: DateInput,
} as Meta<typeof DateInput>;

type Story = StoryObj<typeof DateInput>;

export const DateTime: Story = {
    args: {
        label: "This is date and time field",
        defaultValue: "2022-11-19T21:00:02Z",
    },
};
