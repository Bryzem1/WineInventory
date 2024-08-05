import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWineList } from "../utils/api";
import WineTable from "./WineTable";
import { Wine } from "../utils/types";

function WineListPage() {
    // TODO: id should be auto updated based on the url suffix.
    const { id } = useParams<{ id: string }>();

    // Managing state of wine list data.
    const [wineList, setWineList] = useState<Wine[] | null>(null);

    // TODO: Fake data. Update this to api call result when endpoint is set up.
    const fakeData: Wine[] = [
        {
            id: 1,
            name: "拉菲",
            vintage: "1991",
            price: 5100,
            quantity: 5,
            origin: "隆河谷",
            winelist_id: 1,
        },
        {
            id: 2,
            name: "小拉菲",
            vintage: "1991",
            price: 4396,
            quantity: 6,
            origin: "Napa",
            winelist_id: 1,
        },
        {
            id: 3,
            name: "木桐",
            vintage: "1991",
            price: 10000,
            quantity: 4,
            origin: "波尔多",
            winelist_id: 1,
        },
        {
            id: 4,
            name: "玛歌",
            vintage: "1998",
            price: 6800,
            quantity: 3,
            origin: "勃艮第",
            winelist_id: 2,
        },
    ];

    useEffect(() => {
        if (id) {
            fetchWineList(id).then((data) => {
                const wineData = [data];
                setWineList(wineData);
            });
        }
    }, [id]);

    // TODO: Delete the fakeData check when endpoint is set up.
    if (!wineList && fakeData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* TODO: Fake data. Update this to api call result when endpoint is set up. */}
            <WineTable data={fakeData} />
            {/* <WineTable data={wineList} /> */}
        </div>
    );
}

export default WineListPage;
