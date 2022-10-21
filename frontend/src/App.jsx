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
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      passowrd: "",
      isRegistered: false,
      dots: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=3")
      .then((response) => {
        this.setState({ dots: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loginHandler = (event) => {
    event.preventDefault();
    this.setState({ isRegistered: true });
  };

  signUpHandler = (event) => {
    event.preventDefault();
    this.setState({ isRegistered: true });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header isRegistered={this.state.isRegistered} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dots" element={<Dots dots={this.state.dots} />} />
            <Route path="/dot" element={<Dot />} />
            <Route path="/growwithus" element={<GrowWithUs />} />
            <Route path="/whoweare" element={<WhoWeAre />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/greet" element={<Greet />} />
            <Route
              path="/login"
              element={<Login submit={this.loginHandler} />}
            />
            <Route
              path="/signup"
              element={<SignUp submit={this.signUpHandler} />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
