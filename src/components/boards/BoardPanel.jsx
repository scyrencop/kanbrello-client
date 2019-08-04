import React, { Component } from "react";
import UIkit from "uikit";
import image from "../../images/login.jpg";
import Card from "./card/Card";

import Board from './Board';
class BoardPanel extends Component {
  constructor(props) {
    super(props);
    const { showModal } = this.props;
    this.state = {
      showModal
    };
  }

  render() {
    return (
      <div id="my-id" data-uk-modal="true">
        <div className="uk-modal-dialog uk-modal-body">
          <button class="uk-modal-close-default" type="button" data-uk-close />
          <form>
            <div class=" uk-margin">
              <input class="uk-input" placeholder="Add board title" />
            </div>
            <div class="uk-margin uk-inline">
              <div class="uk-form-controls">
                <select class="uk-select" id="form-stacked-select">
                  <option>No team</option>
                  <option>test</option>
                </select>
              </div>
            </div>
            <div class="uk-inline">
              <button class="uk-button uk-button-default" type="button">
                <span data-uk-icon="lock" /> Private
              </button>
              <ul
                class="uk-nav uk-navbar-dropdown-nav "
                data-uk-dropdown="mode: click"
              >
                <li className="my-description">
                  <a href="">
                    <span className="my-description-title">
                      Create Board...
                    </span>{" "}
                    <p className="my-description-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur vero ducimus{" "}
                    </p>
                  </a>
                </li>
                <hr className="my-dividors" />
                <li className="my-description">
                  <a href="">
                    <span className="my-description-title">
                      Create Business Team...
                    </span>{" "}
                    <p className="my-description-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur vero ducimus{" "}
                    </p>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </form>
          <hr />
          <div className="layer uk-container">
            <div
              className="uk-child-width-1-3@m uk-grid-small uk-grid-match "
              data-uk-grid
            >
              <div>
                <Board  
                    image={image}
                    color={'red'}
                    title={""}/>
              </div>
              <div>
                 <Board  
                    image={image}
                    color={'red'}
                    title={""}/>
              </div>
              <div>
                <Board  
                    image={image}
                    color={'red'}
                    title={""}/>
              </div>
              <div>
                 <Board  
                    image={""}
                    color={'red'}
                    title={""}/>
              </div>
              <div>
                 <Board  
                    image={""}
                    color={'green'}
                    title={""}/>
              </div>
              <div>
                 <Board  
                    image={""}
                    color={'blue'}
                    title={""}/>
              </div>
              <div>
              <Board  
                    image={""}
                    color={'cyan'}
                    title={""}/>
              </div>
          
              <div>
                <div className="uk-card uk-card-default uk-card-body">...</div>
              </div>
            </div>
          </div>
          <hr />
          <button className="uk-button uk-button-default" type="button">
            Create Board
          </button>
        </div>
      </div>
    );
  }
}

export default BoardPanel;
