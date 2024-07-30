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
