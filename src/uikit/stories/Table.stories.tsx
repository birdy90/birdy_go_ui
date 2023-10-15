import {Meta, StoryObj} from "@storybook/react";
import {Table} from "../";
import {tableDataGenerator} from "../../utils";

const tableData = tableDataGenerator(3, 30, 5);
const wideTableData = tableDataGenerator(15, 30, 5);

export default {
    title: "Components/Table",
    component: (args) => {
        return (
            <div className="h-screen w-full p-8">
                <div className="h-full w-full overflow-auto">
                    <Table {...args} />
                </div>
            </div>
        );
    },
    parameters: {
        layout: "fullscreen",
    },
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
    args: {
        columns: tableData.columns,
        data: tableData.data,
    },
};

export const Wide: Story = {
    args: {
        columns: wideTableData.columns,
        data: wideTableData.data,
    },
};
