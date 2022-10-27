import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Dots from "./Dots";
import Dot from "./Dot";
import OurTeam from "./OurTeam";
import GrowWithUs from "./GrowWithUs";
import ReachUs from "./ReachUs";
import Login from "./Login";
import Greet from "./Greet";
import NewDot from "./NewDot";
import NoPage from "./NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dots" element={<Dots />} />
          <Route path="/dot" element={<Dot />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/growwithus" element={<GrowWithUs />} />
          <Route path="/reachus" element={<ReachUs />} />
          <Route path="/greet" element={<Greet />} />
          <Route path="/newdot" element={<NewDot />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
