import HomePage from "./components/HomePage";
import WineListPage from "./components/WineListPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/wine-list/:id" element={<WineListPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
