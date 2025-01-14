import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { memo, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/shadcn/components/ui/select";
import { cn } from "@repo/shadcn/lib/utils";
import PaginationGroup from "./table-pagination-group";
import { Table } from "@tanstack/react-table";
import { Button } from "@repo/shadcn/components/ui/button";

interface TablePaginationProps<T> {
  table: Table<T>;
  // listPageSizes?: number[];
}

const listPageSizes = [10, 50, 100, 200, 500, 1000];

export const TablePagination = memo(function TablePagination<T>({
  table,
}: TablePaginationProps<T>) {
  const { setPageSize, setPageIndex } = table;
  const { totalPage, pageSize, pageIndex, previousPage, nextPage } =
    useMemo(() => {
      const { pageSize, pageIndex } = table.getState().pagination;
      return {
        totalPage: table.getPageCount(),
        pageSize,
        pageIndex,
        previousPage: table.getCanPreviousPage(),
        nextPage: table.getCanNextPage(),
      };
    }, [table]);

  return (
    <div
      className={cn([
        "flex flex-row w-full items-center gap-8 overflow-auto p-1",
      ])}
    >
      <div className="flex flex-row items-center gap-4 sm:gap-6 lg:gap-8">
        <div className="flex items-center space-x-2">
          <p className="whitespace-nowrap text-sm font-medium">Sizes</p>
          <Select
            value={String(pageSize)}
            onValueChange={(value) => {
              setPageSize(Number(value));
              setPageIndex(0);
            }}
          >
            <SelectTrigger className="h-8 w-fit">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent
              side="top"
              className="focus-within:border-enbw-orange"
            >
              {listPageSizes.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-center text-sm font-medium">
          {pageIndex + 1} {totalPage}
        </div>

        <div className="flex items-center space-x-2">
          <Button
            aria-label="first page"
            variant="outline"
            className="size-8 p-0"
            onClick={() => setPageIndex(0)}
            disabled={!previousPage}
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="previous page"
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => {
              setPageIndex(pageIndex - 1);
            }}
            disabled={!previousPage}
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </Button>
          <PaginationGroup table={table} />
          <Button
            aria-label="next page"
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => {
              setPageIndex(pageIndex + 1);
            }}
            disabled={!nextPage}
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="last page"
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => setPageIndex(totalPage - 1)}
            disabled={!nextPage}
          >
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
});
