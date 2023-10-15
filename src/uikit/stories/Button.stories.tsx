import {Meta, StoryObj} from "@storybook/react";
import {BiHome} from "react-icons/bi";
import {ButtonVariantValues, ColorTypeValues, RadiusVariants} from "../";
import {Button, ButtonProps} from "../";

export default {
    title: "Components/Button",
    component: (args) => {
        return (
            <div className="flex flex-col gap-2">
                {ColorTypeValues.map((color, i) => {
                    return (
                        <div key={i} className="flex gap-4 items-center">
                            <div className="w-20 text-right">{color}: </div>
                            {["normal", "disabled", "loading"].map((p, j) => {
                                return <Button key={`${i}-${j}`} color={color} {...args} {...{[p]: true}} />;
                            })}
                        </div>
                    );
                })}
            </div>
        );
    },
} as Meta;

type Story = StoryObj;

const commonArgs = {
    children: "This is a Button",
};

export const AllButtons: Story = {
    args: {
        ...commonArgs,
    },
};

export const ButtonVariants: Story = {
    render: (args: ButtonProps) => {
        return (
            <div className="flex flex-col gap-2">
                {ButtonVariantValues.map((variant, i) => {
                    return (
                        <div key={i} className="flex gap-4 items-center">
                            <div className="w-20 text-right">{variant}: </div>
                            {["normal", "disabled"].map((p, j) => {
                                return (
                                    <Button
                                        key={`${i}-${j}`}
                                        color="danger"
                                        variant={variant}
                                        {...args}
                                        {...{[p]: true}}
                                    >
                                        Button
                                    </Button>
                                );
                            })}
                            <Button key={`${i}-icon`} color="danger" variant={variant} icon={<BiHome />} {...args}>
                                Button
                            </Button>
                            <Button key={`${i}-icon-only`} color="danger" variant={variant} icon={<BiHome />} {...args} />
                        </div>
                    );
                })}
            </div>
        );
    },
};

export const AllButtonsWithIcons: Story = {
    args: {
        ...commonArgs,
        icon: <BiHome />,
    },
};

export const AllButtonsIcons: Story = {
    args: {
        ...commonArgs,
        icon: <BiHome />,
        children: undefined,
    },
};

export const ButtonRadius: Story = {
    render: () => {
        return (
            <div className="flex gap-2">
                {RadiusVariants.map((radius, i) => {
                    return (
                        <Button key={i} radius={radius}>
                            Button
                        </Button>
                    );
                })}
            </div>
        );
    },
};
