"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/shadcn/components/ui/table";
import { flexRender } from "@tanstack/react-table";
import { useTableContext } from "../context/use-table-context";
import { TablePagination } from "./table-pagination";

interface TanstackTableProps {
  isShowPagination: boolean;
}

export default function TanstackTable({
  isShowPagination = true,
}: TanstackTableProps) {
  const { table } = useTableContext();

  const columnsLength = table.getAllColumns()?.length;

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columnsLength} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {/* pagination */}
      {columnsLength !== 0 &&
        table.getState().pagination &&
        isShowPagination && (
          <div className="flex items-center justify-end space-x-2 py-4">
            <TablePagination table={table} />
          </div>
        )}
    </div>
  );
}
