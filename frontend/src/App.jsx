import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Dots from "./Dots";
import Dot from "./Dot";
import GrowWithUs from "./GrowWithUs";
import WhoWeAre from "./WhoWeAre";
import ContactUs from "./ContactUs";
import Login from "./Login";
import SignUp from "./SignUp";
import Greet from "./Greet";
import NoPage from "./NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dots" element={<Dots />} />
            <Route path="/dot" element={<Dot />} />
            <Route path="/growwithus" element={<GrowWithUs />} />
            <Route path="/whoweare" element={<WhoWeAre />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/greet" element={<Greet />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;