import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WineTable from "./WineTable";
import { Wine } from "../utils/types";

function WineListPage() {
    // useParams hook can get the id from the url.
    const { id } = useParams<{ id: string }>();

    const [wines, setWines] = useState<Wine[]>([]);

    const fetchWines = async () => {
        const response = await fetch(`http://127.0.0.1:5000/wine_list/${id}`);
        const data = await response.json();
        setWines(data.wines)
    };

    // Dependency array contains id to trigger fetchWineList when id changes.
    useEffect(() => {
        fetchWines();
    }, [id]);

    // TODO: verify loading page is correctly rendered when fetching is still in progress.
    if (!wines) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <WineTable data={wines} />
        </div>
    );
}

export default WineListPage;
