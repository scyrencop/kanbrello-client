import React from "react";
import styled from "styled-components";
import loginImage from "../../images/login.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";







export default function Login() {
  return (
    <div className="uk-container uk-margin-xlarge-top">
      <div
        className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        data-uk-grid="true"
      >
        <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
          <img src={loginImage} alt="" />
        </div>
        <div className="uk-margin-xlarge-top">
          <div className="uk-card-body ">
            <h3 className="uk-card-title uk-text-center">
              Hello User welcome to kanbrello
            </h3>

            <form>
              <div className="uk-margin">
                <input className="uk-input" type="email" placeholder="Email" />
              </div>

              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="password"
                  placeholder="password"
                />
              </div>
              <div className="uk-margin">
                <input
                  className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
                  type="submit"
                  value="login"
                />
              </div>
            </form>
            <hr />
            <h5 className="uk-text-center">
              don't have an account !
              <Link to="/register"> <a>
                   <span uk-icon=" sign-in" />
               create one
             </a></Link>
            
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
