import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

// define data type in utils/types.ts
import { Wine } from "../utils/types";

const Table = ({ data }: { data: Wine[] }) => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Wine>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "名字",
        size: 150,
      },
      {
        accessorKey: "price", //normal accessorKey
        header: "价格",
        size: 200,
      },
      {
        accessorKey: "quantity",
        header: "数量/支",
        size: 150,
      },

      {
        accessorKey: "origin",
        header: "产地",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
