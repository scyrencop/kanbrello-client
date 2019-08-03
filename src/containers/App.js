import React, { Component } from "react";
import Login from "../components/login/login";
import NavBar from "../components/navbar/navBar";
import Main from "../components/main/Main";

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
