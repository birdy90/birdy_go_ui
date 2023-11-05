import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import {Cell, Column, ColumnProps, Row, Table as UiTable, TableBody, TableHeader, SortDescriptor} from 'react-aria-components';
import {useState} from "react";
import {TableProps} from "../";
import {clsx} from "clsx";
import {BsArrowDownUp, BsArrowUp, BsArrowDown} from "react-icons/bs";

function MyColumn<T extends object>(props: ColumnProps<T>) {
    return (
        <Column {...props} className="sticky top-0 text-left py-1 px-2 border-b border-border bg-white dark:bg-gray-900">
            {(colProps) => <>
                <span className="flex gap-2 items-center whitespace-nowrap">
                    {typeof props.children === 'function' ? props.children(colProps) : props.children}
                    {colProps.allowsSorting && colProps.sortDirection && (
                        <span aria-hidden="true">
                            {colProps.sortDirection === 'ascending' ? <BsArrowUp /> : <BsArrowDown />}
                        </span>
                    )}
                    {colProps.allowsSorting && !colProps.sortDirection && <BsArrowDownUp aria-hidden="true" className="text-gray-400" />}
                </span>
            </>}
        </Column>
    );
}

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

    const tableClasses = clsx(
        props.className,
        'w-full border-separate border-spacing-0',
    )

    return (
        <UiTable
            className={tableClasses}
            aria-label="Data table"
            onSortChange={onSort}
            sortDescriptor={sortDescriptor}
        >
            {
                <TableHeader key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        return (
                            <MyColumn
                                id={header.id}
                                key={header.id}
                                style={{width: header.getSize()}}
                                allowsSorting={header.column.getCanSort()}
                                isRowHeader={true}
                            >
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </MyColumn>
                        );
                    })}
                </TableHeader>
            }

            <TableBody>
                {rows.map((row) => {
                    return (
                        <Row data-row={row.index} className="odd:bg-gray-50 hover:bg-gray-100 dark:odd:bg-gray-900 dark:hover:bg-gray-800" key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <Cell key={cell.id} className="px-2 py-0.5" style={{width: cell.column.getSize()}}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Cell>
                            ))}
                        </Row>
                    );
                })}
            </TableBody>
        </UiTable>
    );
};
