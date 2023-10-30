import {Meta, StoryObj} from "@storybook/react";
import {Select} from "../src";

export default {
    title: "Components/Input",
    component: Select,
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const SelectInput: Story = {
    args: {
        required: true,
        label: "This is date and time field",
        description: "Field explanation",
        placeholder: "Choose one of the items",
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
        onChange: (e) => {
            console.log("Story handler: ", e);
        },
    },
};
