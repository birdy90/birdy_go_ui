import {Meta, StoryObj} from "@storybook/react";
import {Input} from "../src";

export default {
    title: "Components/Input",
    component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        name: 'some-input',
        label: "Some text field",
        placeholder: "Some text field placeholder",
        description: "This text is made for additional clarifications",
        required: true,
    },
};

export const Error: Story = {
    args: {
        label: "Some text field",
        errorMessage: "This field validation has failed",
        description: "This text is made for additional clarifications",
    },
};

export const Readonly: Story = {
    args: {
        label: "Some text field with value",
        value: "London, UK",
        readOnly: true,
    },
};
