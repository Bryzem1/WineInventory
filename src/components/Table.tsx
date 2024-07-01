import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

// define data type in utils/types.ts
import { Person } from "../utils/types";

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    name: "拉菲",
    price: "5100",
    quantity: "5",
    origin: "隆河谷",
  },
  {
    name: "小拉菲",
    price: "4396",
    quantity: "6",
    origin: "Napa",
  },
  {
    name: "木桐",
    price: "10000",
    quantity: "4",
    origin: "波尔多",
  },
  {
    name: "玛歌",
    price: "6800",
    quantity: "3",
    origin: "勃艮第",
  },
  {
    name: "小玛歌",
    price: "32188",
    quantity: "4",
    origin: "托斯卡纳",
  },
];

const Table = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
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
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};

export default Table;
