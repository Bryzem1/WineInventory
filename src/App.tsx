import WineListPage from "./components/WineListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wine-list/:id" element={<WineListPage />}></Route>
        <Route path="/" element={<h1>BRIAN</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
