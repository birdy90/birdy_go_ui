import {Meta, StoryObj} from "@storybook/react";
import {Input} from "../src";

export default {
    title: "Components/Input",
    component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

const commonArgs = {
    name: 'some-input',
    label: "Some text field",
    placeholder: "Some text field placeholder",
    description: "This text is made for additional clarifications",
    required: true,
};

export const Default: Story = {
    args: {
        ...commonArgs,
    },
};

export const Error: Story = {
    args: {
        ...commonArgs,
        errorMessage: "This field validation has failed",
    },
};

export const Readonly: Story = {
    args: {
        ...commonArgs,
        value: "London, UK",
        readOnly: true,
    },
};

export const CustomClasses: Story = {
    args: {
        ...commonArgs,
        wrapperClassName: 'px-4 py-2 rounded-xl bg-gray-100 flex gap-2',
        className: 'rounded-full px-3'
    },
};
