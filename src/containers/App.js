import React, { Component } from "react";
import Login from "../components/login";
import NavBar from "../components/navBar";
import Main from "../components/Main";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
         {/* <Login/>  */}
         <NavBar />
         <Main/>
      </div>
    );
  }
}

export default App;
