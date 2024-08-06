import { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { MRT_Localization_ZH_HANS } from "material-react-table/locales/zh-Hans";

import { Wine } from "../utils/types";

const OldWineTable = ({ data }: { data: Wine[] }) => {
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

    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            localization={MRT_Localization_ZH_HANS}
        />
    );
};

export default OldWineTable;
