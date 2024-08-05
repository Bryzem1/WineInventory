import HomePage from "./components/HomePage";
import WineListPage from "./components/WineListPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* TODO: make the router id suffix to point to the correct wine list*/}
                <Route path="/wine-list/:id" element={<WineListPage />}></Route>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
