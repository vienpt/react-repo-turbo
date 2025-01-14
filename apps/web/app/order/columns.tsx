"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Order } from "../type";

export const OrderColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "OrderId",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "processMark",
    header: "Process mark",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "subProcessMark",
    header: "Sub process mark",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "orderCreaterName",
    header: "Creater name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "installationDate",
    header: "Date",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "division",
    header: "Division",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "planStartDate",
    header: "Start date",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "planEndDate",
    header: "End date",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "devices",
    header: "Devices",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) =>
      `${row.customerInformation.firstName} ${row.customerInformation.lastName}`,
    id: "fullName",
    header: "Customer name",
    cell: (info) => info.getValue(),
  },
];
