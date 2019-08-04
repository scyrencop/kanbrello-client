import React, { Component } from "react";
import UIkit from "uikit";
import image from "../../images/login.jpg";
import Board from './Board';
/** REDUX PART */
import { connect } from "react-redux";
import { imagesFromUnsplsh , add_new_board } from "../../actions/index";

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
    //const board  =  {
      //     id: 2,
      //     title: "board 2",
      //     image: this.props.images[Math.floor(Math.random() * 100)].download_url,
      //     color: ""
      //   }
    
    // this.props.add_new_board({

    // })
    console.log("state is :" , this.state)
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

  handleBoardClick = e => {
   
    this.setState({
      image : (e.image) ? image : "",
      color : e.color
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
              className="uk-child-width-1-3@m uk-grid-small uk-grid-match myminiboards"
              data-uk-grid
            >
             
              <div>
                <Board  
                    image={image}
                    color={''}
                    title={""}
                    handleClick = {this.handleBoardClick}
                    minicard = {true}
                    />
              </div>
              <div>
                 <Board  
                    image={image}
                    color={''}
                    title={""}
                    handleClick = {this.handleBoardClick}
                    minicard = {true}
                    />
              </div>
              <div>
                <Board  
                    image={image}
                    color={''}
                    title={""}
                    handleClick = {this.handleBoardClick}
                    minicard = {true}
                    />
              </div>
              <div>
                 <Board  
                    image={""}
                    color={'red'}
                    title={""}
                    handleClick = {this.handleBoardClick}
                    minicard = {true}
                    />
              </div>
              <div>
                 <Board  
                    image={""}
                    color={'green'}
                    title={""}
                    handleClick = {this.handleBoardClick}
                    minicard = {true}
                    />
              </div>
              <div>
                 <Board  
                    image={""}
                    color={'blue'}
                    title={""}
                    handleClick = {this.handleBoardClick}
                    minicard = {true}
                    />
              </div>
              <div>
              <Board  
                    image={""}
                    color={'cyan'}
                    title={""}
                    handleClick = {this.handleBoardClick}
                    minicard = {true}
                    />
              </div>
          
              <div>
                <div className="uk-card uk-card-default uk-card-body">...</div>
              </div>
            </div>
          </div>
          <hr />
          <button className="uk-button uk-button-default" type="button" onClick={this.addBoard}>
            Create Board
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  boards: state.boardReducer.boards,
  images: state.boardReducer.images
});
export default connect(mapStateToProps, {imagesFromUnsplsh , add_new_board})(BoardPanel);
