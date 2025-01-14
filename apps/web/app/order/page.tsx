import TanstackTable from "../components/table";
import { TableProvider } from "../context/use-table-context";
import { OrderColumns } from "./columns";

export default function OrderPage() {
  return (
    <TableProvider
      data={[]}
      columns={OrderColumns}
      pagination={{
        pageSize: 50,
        pageIndex: 1,
      }}
    >
      <TanstackTable isShowPagination />
    </TableProvider>
  );
}
