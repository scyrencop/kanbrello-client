import React from "react";
import styled from "styled-components";
import login from "../images/login.jpg";
export default function Login() {
  return (
    <div className="uk-container">
      <div className="uk-child-width-1-2 uk-text-center" uk-grid>
        <div>
          <div className="uk-card uk-card-default uk-card-body">
            <form>
              <div className="uk-margin uk-width-1-1">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: user" />
                  <input
                    className="uk-input"
                    type="text"
                    placeholder="User name"
                  />
                </div>
              </div>
              <div className="uk-margin uk-width-1-1">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: lock" />
                  <input
                    className="uk-input"
                    type="password"
                    placeholder="password"
                  />
                </div>
              </div>
              <div className="uk-margin uk-width-1-1">
                <button className="uk-button uk-button-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
