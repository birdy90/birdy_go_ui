import {Meta, StoryObj} from "@storybook/react";
import {Nav, NavProps} from "../src";
import {BiHome} from "react-icons/bi";

const dataGenerator = (len: number) =>
    Array(len)
        .fill(0)
        .map((_, i) => `Menu ${i}`);

const newMenuItem = (dataItem: string) => ({label: dataItem, onClick: () => console.log("click")});

export default {
    title: "Components/Nav",
    component: Nav,
} as Meta<NavProps>;

type Story = StoryObj<typeof Nav>;

export const Horizontal: Story = {
    args: {
        items: [
            {icon: <BiHome/>},
            ...dataGenerator(2).map(newMenuItem),
            {type: "divider"},
            ...dataGenerator(1).map(newMenuItem),
            {type: "spacer"},
            {
                label: (
                    <div className="flex px-4 h-full items-center justify-center bg-amber-50 border-2 border-amber-200 border-dashed rounded-full">
                        Static field
                    </div>
                ),
            },
            {type: "divider"},
            ...dataGenerator(2).map(newMenuItem),
        ],
    },
};

export const Vertical: Story = {
    args: {
        ...Horizontal.args,
        vertical: true,
    },
};
