import {ColumnDef, createColumnHelper} from "@tanstack/react-table";

const columnHelper = createColumnHelper();
const columnsGenerator = (len: number, size: number) => {
    return [...Array(len)].map((_, index) => {
        return columnHelper.accessor(`column${index}` as string, {
            id: `column${index}`,
            header: `Col ${index}`,
            size,
        }) as ColumnDef<unknown>;
    });
};

export const tableDataGenerator = (columnLen: number, len: number, stringLen = 7) => {
    const columns = columnsGenerator(columnLen, stringLen * 15);
    const data = [...Array(len)].map((_, i) => {
        const rowData = {};
        columns.forEach((column, j) => {
            rowData[column.id as never] = `Cell data ${j}.${i}` as never;
        });
        return rowData;
    });
    return {columns, data};
};
