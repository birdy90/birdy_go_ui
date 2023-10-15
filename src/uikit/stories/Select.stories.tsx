import {Meta, StoryObj} from "@storybook/react";
import {Select} from "../";

export default {
    title: "Components/Input",
    component: Select,
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const SelectInput: Story = {
    args: {
        label: "This is date and time field",
        description: "Field explanation",
        placeholder: "Choose one item",
        options: [
            {label: "Option 1", value: 1},
            {label: "Option 2", value: 2},
            {label: "Option 3", value: 3},
            {label: "Option 4", value: 4},
        ],
        onChange: (e) => {
            console.log("Story handler: ", e);
        },
    },
};
