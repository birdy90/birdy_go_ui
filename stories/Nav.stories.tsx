import {Meta, StoryObj} from "@storybook/react";
import {Nav, NavProps} from "../src";
import {BiHome} from "react-icons/bi";

const lengthOfStrings = 7;

const randomString = (len: number) => {
    return [...Array(len)].map(() => Math.random().toString(36)[2]).join("");
};

const dataGenerator = (len: number) =>
    Array(len)
        .fill(0)
        .map(() => {
            const label = randomString(lengthOfStrings);
            return label.charAt(0).toUpperCase() + label.slice(1);
        });

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
