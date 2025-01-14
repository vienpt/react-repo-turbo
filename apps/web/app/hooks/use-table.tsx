import {
  ColumnDef,
  getCoreRowModel,
  OnChangeFn,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

export interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  pagination: PaginationState;
  sorting?: SortingState;
  onFilterChange?: (dataFilters: Partial<T>) => void;
  onSortingChange?: OnChangeFn<SortingState>;
}

export default function useTable<T>(props: TableProps<T>) {
  const pagination = useMemo(() => {
    const { pageSize, pageIndex } = props.pagination;
    return {
      pageSize,
      pageIndex,
    };
  }, [props.pagination]);

  const sorting = useMemo(() => {
    return props.sorting;
  }, [props.sorting]);

  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    state: {
      pagination,
      sorting,
    },
    manualFiltering: true,
    manualSorting: true,
    manualPagination: true,
    onSortingChange: props?.onSortingChange,
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
}
