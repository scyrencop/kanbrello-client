import React from "react";
import NavBar from "../navbar/navBar";
import Main from "../main/Main";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
}
export default Home;
