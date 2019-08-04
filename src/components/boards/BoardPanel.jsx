import React, { Component } from "react";
import UIkit from "uikit";
import image from "../../images/login.jpg";
import Card from "./card/Card";

import Board from './Board';
class BoardPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
       title : "",
       teamName : "No-team",
       image : "",
       color : "red"
    };
  }

  addBoard = e=>{

  }

  handleTitle = e=> {
      this.setState({
          title:  e.target.value
      })
  }

  handleSelect = e =>{
      this.setState({
          teamName : e.target.value
      })
  }


  render() {
    return (
      <div id="my-id" data-uk-modal="true">
        <div className="uk-modal-dialog uk-modal-body">
          <button className="uk-modal-close-default" type="button" data-uk-close />
          <form>
            <div className=" uk-margin">
              <input className="uk-input" placeholder="Add board title" onChange={this.handleTitle} value={this.state.title} />
            </div>
            <div className="uk-margin uk-inline">
              <div className="uk-form-controls">
                <select className="uk-select" id="form-stacked-select" onChange={this.handleSelect}>
                  <option value="No-team">No team</option>
                  <option value="team1">test</option>
                </select>
              </div>
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
                    title={""}
                    onClick = {this.handleBoardClick} 
                    />
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
