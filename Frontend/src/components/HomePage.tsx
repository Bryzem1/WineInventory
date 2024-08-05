import { useEffect, useState } from "react";
import { fetchWineListList } from "../utils/api";
import HomeTable from "./HomeTable";
import { WineList } from "../utils/types";

function WineListListPage() {
    const [wineLists, setWineLists] = useState<WineList[]>([]);

    const fetchWineListList = async () => {
        const response = await fetch(`http://127.0.0.1:5000/wine_lists`);
        const data = await response.json();
        setWineLists(data.winelists)
      };

      
    // const fakeData: WineList[] = [
    //     {
    //         id: 1,
    //         name: "酒单1",
    //         createdAt: "2021-10-10",
    //         link: "http://localhost:5173/wine-list/1",
    //     },
    //     {
    //         id: 2,
    //         name: "酒单2",
    //         createdAt: "2025-10-11",
    //         link: "http://localhost:5173/wine-list/2",
    //     },
    // ];

    useEffect(() => {
        fetchWineListList().then((data) => data);
    }, []);

    return (
        <div>
            {/* <HomeTable data={fakeData} /> */}
            <HomeTable data={wineLists} />
        </div>
    );
}

export default WineListListPage;
