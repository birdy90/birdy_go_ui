import {Meta, StoryObj} from "@storybook/react";
import { Select, SelectProps } from "../src";

export default {
    title: "Components/Input",
    component: Select,
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

const commonArgs: Partial<SelectProps> = {
    label: "Some options to choose",
    description: "Field explanation for select",
    placeholder: "Choose one item",
    options: [
        {label: "Option 1", value: '1'},
        {label: "Option 2", value: '2'},
        {label: "Option 3", value: '3'},
        {label: "Option 4", value: '4'},
        {label: "Option 11", value: '5'},
        {label: "Option 12", value: '6'},
        {label: "Option 13", value: '7'},
        {label: "Option 14", value: '8'},
    ],
}

export const SelectControl: Story = {
    args: {
        ...commonArgs,
        required: true,
        onChange: (e) => {
            console.log("Story handler: ", e);
        },
    },
};

export const SelectControlPreselected: Story = {
    args: {
        ...commonArgs,
        required: true,
        onChange: (e) => {
            console.log("Story handler: ", e);
        },
        defaultValue: '2',
    },
};

export const SelectWithNumericValues: Story = {
    args: {
        ...commonArgs,
        options: [
            {label: "Option 1", value: 1},
            {label: "Option 2", value: 2},
            {label: "Option 3", value: 3},
            {label: "Option 4", value: 4},
            {label: "Option 11", value: 5},
            {label: "Option 12", value: 6},
            {label: "Option 13", value: 7},
            {label: "Option 14", value: 8},
        ],
        defaultValue: 5,
    },
};
