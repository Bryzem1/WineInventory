import { useEffect, useState } from "react";
import { fetchWineListList } from "../utils/api";
import HomeTable from "./HomeTable";
import { WineList } from "../utils/types";

function WineListListPage() {
    const [wineLists, setWineLists] = useState<WineList[]>([]);

    const fakeData: WineList[] = [
        {
            listName: "酒单1",
            creationDate: "2021-10-10",
            link: "http://localhost:5173/wine-list/1",
        },
        {
            listName: "酒单2",
            creationDate: "2025-10-11",
            link: "http://localhost:5173/wine-list/2",
        },
    ];

    useEffect(() => {
        fetchWineListList().then((data) => data);
    }, []);

    return (
        <div>
            <HomeTable data={fakeData} />
        </div>
    );
}

export default WineListListPage;
