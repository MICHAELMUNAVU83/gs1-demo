import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
function App() {
  return (
    <div>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
