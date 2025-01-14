import { Fragment, useEffect, useMemo, useState } from "react";
// import { useDataTableContext } from "@/context/use-data-table-provider";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@repo/shadcn/components/ui/pagination";
import { Table } from "@tanstack/react-table";

const pagesPerGroup = 3;

interface PaginationGroupProps<T> {
  table: Table<T>;
}

export default function PaginationGroup<T>({ table }: PaginationGroupProps<T>) {
  const [currentGroup, setCurrentGroup] = useState(0);
  const totalPages = table.getPageCount();
  const currentPageIndex = table.getState().pagination.pageIndex;

  const totalGroups = useMemo(
    () => Math.ceil(totalPages / pagesPerGroup),
    [totalPages],
  );

  const pageGroups = useMemo(() => {
    return Array.from({ length: totalGroups }, (_, groupIndex) =>
      Array.from(
        { length: pagesPerGroup },
        (_, pageIndex) => groupIndex * pagesPerGroup + pageIndex,
      ).filter((pageIndex) => pageIndex < totalPages),
    );
  }, [totalGroups, totalPages]);

  useEffect(() => {
    const newGroup = Math.floor(currentPageIndex / pagesPerGroup);
    setCurrentGroup(newGroup);
  }, [currentPageIndex]);

  return (
    <PaginationContent>
      {pageGroups.map((pageGroup, groupIndex) => (
        <Fragment key={groupIndex}>
          {currentGroup === groupIndex && groupIndex > 0 && (
            <PaginationItem
              onClick={() => {
                const searchParams = new URLSearchParams(
                  window.location.search,
                );
                const page = Number(searchParams.get("page"));
                setCurrentGroup((prev) => prev - 1);
                table.setPageIndex(page - pagesPerGroup - 1);
              }}
            >
              <PaginationLink href="#" aria-label="Previous Page Group">
                <PaginationEllipsis />
              </PaginationLink>
            </PaginationItem>
          )}
          {currentGroup === groupIndex &&
            pageGroup.map((pageIndex) => (
              <PaginationItem key={pageIndex}>
                <PaginationLink
                  href="#"
                  onClick={() => {
                    table.setPageIndex(pageIndex);
                  }}
                  isActive={pageIndex === currentPageIndex}
                  aria-current={
                    pageIndex === currentPageIndex ? "page" : undefined
                  }
                >
                  {pageIndex + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          {currentGroup === groupIndex && groupIndex < totalGroups - 1 && (
            <PaginationItem
              onClick={() => {
                setCurrentGroup((prev) => prev + 1);
                table.setPageIndex(
                  table.getState().pagination.pageIndex + 1 + pagesPerGroup - 1,
                );
              }}
            >
              <PaginationLink href="#" aria-label="Next Page Group">
                <PaginationEllipsis />
              </PaginationLink>
            </PaginationItem>
          )}
        </Fragment>
      ))}
    </PaginationContent>
  );
}
