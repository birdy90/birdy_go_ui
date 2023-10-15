import {
    SortDescriptor,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Table as UiTable,
} from "@nextui-org/react";
import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import {useState} from "react";
import {TableProps} from "../";

export const Table = <TData = unknown,>(props: TableProps<TData>) => {
    const [sorting, setSorting] = useState<SortingState>(props.initialSort ? [props.initialSort] : []);
    const sortDescriptor: SortDescriptor = sorting[0] && {
        column: sorting[0].id,
        direction: sorting[0].desc ? "descending" : "ascending",
    };
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const table = useReactTable({
        data: props.data,
        columns: props.columns,
        state: {
            sorting,
            columnFilters,
        },
        onColumnFiltersChange: setColumnFilters,
        columnResizeMode: "onChange",
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    const {rows} = table.getRowModel();
    const headerGroup = table.getHeaderGroups()[0];

    function onSort(descriptor: SortDescriptor) {
        if (sorting.length > 0 && descriptor.direction === "ascending") {
            return setSorting([]);
        }

        if (!descriptor.column) return;
        const sortingState: SortingState = [
            {id: descriptor.column.toString(), desc: descriptor.direction === "descending"},
        ];
        setSorting(sortingState);
    }
    return (
        <UiTable
            classNames={{table: props.className}}
            removeWrapper
            aria-label="Data table"
            isHeaderSticky
            onSortChange={onSort}
            sortDescriptor={sortDescriptor}
        >
            {
                <TableHeader key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        return (
                            <TableColumn
                                key={header.id}
                                style={{width: header.getSize()}}
                                allowsSorting={header.column.getCanSort()}
                            >
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </TableColumn>
                        );
                    })}
                </TableHeader>
            }

            <TableBody>
                {rows.map((row) => {
                    return (
                        <TableRow data-row={row.index} key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id} style={{width: cell.column.getSize()}}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </UiTable>
    );
};
