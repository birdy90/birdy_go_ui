import {Meta, StoryObj} from "@storybook/react";
import {BiHome} from "react-icons/bi";
import {ButtonVariantValues, Button, ButtonProps} from "../src";

const ButtonsRow = (args: ButtonProps) => {
    return <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
            {["normal", "disabled", "loading"].map((p, i) => {
                return <Button key={i} {...args} {...{[p]: true}} />;
            })}
        </div>
        <div className="flex gap-2 items-center">
            <Button {...args} children={undefined} icon={<BiHome />} />
            <Button {...args} children={undefined} icon={<BiHome />} loading />
            <Button {...args} icon={<BiHome />} />
            <Button {...args} icon={<BiHome />} loading />
        </div>
    </div>
}

const AllButtonVariants = (args: ButtonProps) => {
    return <>
        <div className="flex flex-col gap-8">
            {ButtonVariantValues.map((variant, i) => {
                return (
                    <div key={i} className="flex gap-4 items-center">
                        <div className="w-4 -rotate-90 flex justify-center">{variant} </div>
                        <ButtonsRow {...args} variant={variant} />
                    </div>
                );
            })}
        </div>
    </>
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
    render: AllButtonVariants,
};

export const Primary: Story = {
    args: {
        ...commonArgs,
        color: 'primary',
    },
    render: AllButtonVariants,
};

export const Secondary: Story = {
    args: {
        ...commonArgs,
        color: 'secondary',
    },
    render: AllButtonVariants,
};

export const Danger: Story = {
    args: {
        ...commonArgs,
        color: 'danger',
    },
    render: AllButtonVariants,
};

export const Large: Story = {
    args: {
        ...commonArgs,
        large: true,
    },
    render: AllButtonVariants,
};

export const Rounded: Story = {
    args: {
        ...commonArgs,
        rounded: true,
    },
    render: AllButtonVariants,
};