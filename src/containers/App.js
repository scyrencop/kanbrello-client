import React from "react";
import Login from "../components/login/login";
import Home from '../components/home/Home'
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const userLogged = false;
  return (!userLogged) ? <Login/> : <Home/>
}
export default App;