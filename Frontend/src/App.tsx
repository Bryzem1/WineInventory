import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WineListPage from "./components/WineListPage";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route
                        path="/wine-list/:id"
                        element={<WineListPage />}
                    ></Route>
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
