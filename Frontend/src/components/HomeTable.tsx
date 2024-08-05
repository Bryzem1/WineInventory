import { useMemo } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from "material-react-table";
import { WineList } from "../utils/types";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const WineLLTable = ({ data }: { data: WineList[] }) => {
    const columns = useMemo<MRT_ColumnDef<WineList>[]>(
        () => [
            {
                accessorKey: "name",
                header: "酒单",
                size: 350,
                Cell: ({ cell }) => (
                    <Button
                        component={Link}
                        // TODO: figure out how to use route link without a link field in types.ts
                        // potential solution: using a prefix + {int: id}
                        to={cell.row.original.link}
                        variant="contained"
                        sx={{ bgcolor: "#9E7D60" }}
                    >
                        {cell.getValue() as string}
                    </Button>
                ),
            },
            {
                accessorKey: "createdAt",
                header: "创建日期",
                size: 350,
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

export default WineLLTable;
