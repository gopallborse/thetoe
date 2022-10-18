import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Dots from "./Components/Dots";
import Dot from "./Components/Dot";
import Sparks from "./Components/Sparks";
import Spark from "./Components/Spark";
import GrowWithUs from "./Components/GrowWithUs";
import WhoWeAre from "./Components/WhoWeAre";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Greet from "./Components/Greet";
import NoPage from "./Components/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      passowrd: null,
      isRegistered: false,
      showPass: false,
      dots: [],
      sparks: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ dots: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        this.setState({ sparks: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loginHandler = (event) => {
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
            <Route
              path="/sparks"
              element={<Sparks sparks={this.state.sparks} />}
            />
            <Route path="/spark" element={<Spark />} />
            <Route path="/growwithus" element={<GrowWithUs />} />
            <Route path="/whoweare" element={<WhoWeAre />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/greet" element={<Greet />} />
            <Route
              path="/login"
              element={<Login submit={this.loginHandler} />}
            />

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
