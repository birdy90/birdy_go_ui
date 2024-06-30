import {Meta, StoryObj} from "@storybook/react";
import {BiHome} from "react-icons/bi";
import {Button, ButtonProps} from "../src";

const ButtonsRow = (args: ButtonProps) => {
    return <div className="flex flex-col gap-2">
            {["normal", "disabled", "loading"].map((p, i) => {
                return <Button key={i} {...args} {...{[p]: true}}>This is {p} button</Button>;
            })}
            <Button {...args} children={undefined} icon={<BiHome />} />
            <Button {...args} children={undefined} icon={<BiHome />} loading />
        <Button {...args} icon={<BiHome />}>Button with icon</Button>
        <Button {...args} icon={<BiHome />} loading>Button with icon</Button>
    </div>
}

export default {
    title: "Components/Button",
    component: ButtonsRow,
} as Meta;

type Story = StoryObj;

const commonArgs = {
    children: "This is a Button",
};

export const Default: Story = {
    args: {...commonArgs},
    render: ButtonsRow,
};