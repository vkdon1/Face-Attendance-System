import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Attendance from "./pages/Attandance";
import AttandanceRecord from "./components/AttandanceRecord";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/attendanceRecord" element={<AttandanceRecord />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
