import {Meta, StoryObj} from "@storybook/react";
import {BiHome} from "react-icons/bi";
import {Alert, ColorTypeValues} from "../";

export default {
    title: "Components/Alert",
    component: Alert,
} as Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    args: {
        children: (
            <div className="flex justify-center">
                <BiHome width={128} />
            </div>
        ),
    },
};

export const WithTitle: Story = {
    args: {
        header: "Alert title",
        children: "Some alert description text",
    },
};
export const Colors: Story = {
    render: () => {
        return (
            <div className="flex flex-col gap-2">
                {ColorTypeValues.map((variant, i) => {
                    return (
                        <Alert key={i} color={variant}>
                            Some alert text
                        </Alert>
                    );
                })}
            </div>
        );
    },
};
