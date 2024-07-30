import { useMemo } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from "material-react-table";

import { Wine } from "../utils/types";

const Table = ({ data }: { data: Wine[] }) => {
    const columns = useMemo<MRT_ColumnDef<Wine>[]>(
        () => [
            {
                accessorKey: "name", // can access nested data with dot notation
                header: "名字",
                size: 150,
            },
            {
                accessorKey: "price",
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
