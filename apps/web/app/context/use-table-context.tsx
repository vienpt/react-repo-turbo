"use client";

import { Table } from "@tanstack/react-table";
import { createContext, ReactNode, useContext, useMemo } from "react";
import useTable, { TableProps } from "../hooks/use-table";

interface TableContextProps<T> extends TableProps<T> {
  children: ReactNode;
}
interface TableContextValue<T> {
  table: Table<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TableContext = createContext<TableContextValue<any> | undefined>(
  undefined,
);

export function TableProvider<T>({
  children,
  ...props
}: TableContextProps<T> & { children: ReactNode }) {
  const table = useTable(props);

  const value = useMemo(
    () => ({
      table,
    }),
    [table],
  );

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
}

export function useTableContext<T>() {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error("useTableContext must be used within a TableProvider");
  }

  return context as TableContextValue<T>;
}
