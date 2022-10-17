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
import Register from "./Components/Register";
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
      dots:[]
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({dots: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  registrationHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({ name, email, password, isRegistered: true });
    localStorage.setItem(name, name);
  };

  showPassHandler = () => {
    this.setState({
      showPass: !this.state.showPass,
    });
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
            <Route path="/sparks" element={<Sparks />} />
            <Route path="/spark" element={<Spark />} />
            <Route path="/growwithus" element={<GrowWithUs />} />
            <Route path="/whoweare" element={<WhoWeAre />} />
            <Route path="/contactus" element={<ContactUs />} />
            {this.state.isRegistered ? (
              <Route path="/greet" element={<Greet />} />
            ) : (
              <Route
                path="/register"
                element={
                  <Register
                    submit={this.registrationHandler}
                    showPass={this.state.showPass}
                    click={this.showPassHandler}
                  />
                }
              />
            )}
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
