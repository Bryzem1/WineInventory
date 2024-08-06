import { useMemo } from "react";
import {
    MaterialReactTable,
    type MRT_ColumnDef,
} from "material-react-table";
import { MRT_Localization_ZH_HANS } from 'material-react-table/locales/zh-Hans';
import { WineList } from "../utils/types";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const HomeTable = ({ data }: { data: WineList[] }) => {
    const columns = useMemo<MRT_ColumnDef<WineList>[]>(
        () => [
            {
                accessorKey: "name",
                header: "酒单",
                size: 350,
                Cell: ({ cell }) => (
                    <Button
                        component={Link}
                        to={"http://localhost:5173/wine-list/" + (cell.row.original.id).toString()}
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

    return <MaterialReactTable columns={columns} data={data} localization={MRT_Localization_ZH_HANS}/>;
};

export default HomeTable;
