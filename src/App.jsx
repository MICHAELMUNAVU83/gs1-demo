import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import TopBar from "./components/TopBar";
import HomeScreen from "./HomeScreen";
function App() {
  return (
    <div>
      <Router>
        <TopBar />
       
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sectors" element={<Sectors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
