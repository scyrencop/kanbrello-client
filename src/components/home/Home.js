import React from "react";
import NavBar from "../navbar/navBar";
import Main from "../main/Main";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    
    <Router>
      <NavBar />
      <Main />
    </Router>
  
     
  );
}
export default Home;
