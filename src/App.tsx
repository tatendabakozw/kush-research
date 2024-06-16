import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Dashboard from "./pages/dashboard/Dashboard";
import GoodsType from "./pages/dashboard/GoodsType";
import Requests from "./pages/dashboard/Requests";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<GoodsType />} />
        <Route path="/goods_type" element={<GoodsType />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </Router>
  );
}

export default App;
