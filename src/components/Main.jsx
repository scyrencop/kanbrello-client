import React, { Component } from "react";
import LoginImage from "../images/login.jpg";

import Board from "./Board";
class Main extends Component {
  render() {
    return (
      <div className="uk-container">
        <div className="section-1">
          <h4>
            <span uk-icon="star" /> Starred Boards
          </h4>
          <div
            class="uk-child-width-1-4@m uk-grid-small uk-grid-match"
            data-uk-grid="true"
          >
            <div>
              <Board image={LoginImage} color={"#ec2147"} title={""}/>
            </div>
            <div>
              <Board image={LoginImage} color={""} title={""}/>
            </div>
            <div>
              <Board image={"LoginImage"} color={"#00bcd4"} title={""}/>
            </div>
            <div>
              <Board image={LoginImage} color={""} title={""}/>
            </div>
          </div>
        </div>
        <hr />
        <div className="section-2">
          <h4>
            <span uk-icon="user" /> Personal Boards
          </h4>
          <div
            class="uk-child-width-1-4@m uk-grid-small uk-grid-match"
            data-uk-grid="true"
          >
           <div>
              <Board image={LoginImage} color={"#ec2147"} title={""}/>
            </div>
            <div>
              <Board image={LoginImage} color={"#ec2147"} title={""}/>
            </div>
            <div>
              <Board image={LoginImage} color={"#ec2147"} title={""}/>
            </div>
            <div>
              <Board image={LoginImage} color={"#ec2147"} title={""}/>
            </div>
            <div>
              <Board image={LoginImage} color={"#ec2147"} title={""}/>
            </div>
            <div>
              <Board image={LoginImage} color={"#ec2147"} title={""}/>
            </div>
            <div>
              <Board image={LoginImage} color={"#ec2147"} title={""}/>
            </div>
            <div>
              <Board image={LoginImage} color={"#ec2147"} title={""}/>
            </div>
            <div>
              <Board image={LoginImage} color={"#ec2147"} title={""}/>
            </div>
            <div>
              <Board image={""} color={"gray"} title={""}/>
            </div>          
          </div>
          <div className="uk-margin">
            <a href="dd" className="uk-button uk-button-danger">
              Show More ...
            </a>
          </div>
        </div>
        <hr />
        <div className="section-3">
          <h4>
            <span uk-icon="users" /> test***
          </h4>
        </div>
      </div>
    );
  }
}

export default Main;
