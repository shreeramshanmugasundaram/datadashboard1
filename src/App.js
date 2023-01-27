import "./App.css";
import NavBar from "./Components/Common/Nav";
import PieChart from "./Components/Charts/PieChart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StackedBarChart from "./Components/Charts/BarChart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        {/* Routes */}
        <div className="Charts">
          <Routes>
            <Route path="/" element={<PieChart />} />
            <Route path="/bar" element={<StackedBarChart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
