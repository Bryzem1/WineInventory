import { useEffect, useState } from "react";
import HomeTable from "./HomeTable";
import { WineList } from "../utils/types";

function HomePage() {
    const [wineLists, setWineLists] = useState<WineList[]>([]);

    const fetchWineLists = async () => {
        const response = await fetch(`http://127.0.0.1:5000/wine_lists`);
        const data = await response.json();
        setWineLists(data.winelists)
    };

    // Fetch wine lists when home page is rendered.
    useEffect(() => {
        fetchWineLists();
    }, []);

    return (
        <div>

            <HomeTable data={wineLists} />
        </div>
    );
}

export default HomePage;
