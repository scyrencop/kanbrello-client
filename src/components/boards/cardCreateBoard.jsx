import React, { Component } from "react";
import styled from "styled-components";
import UIkit from 'uikit';
import BoardPanel from './BoardPanel';
/** redux part */
import { connect } from "react-redux";
import { add_new_board } from "../../actions/index";
class CardCreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  addNewBoard = e => {
    // const board  =  {
    //     id: 2,
    //     title: "board 2",
    //     image: this.props.images[Math.floor(Math.random() * 100)].download_url,
    //     color: ""
    //   }
    // this.props.add_new_board(board);
    // console.log( Math.random()*100)
    //step 01 : show modal to add new board
     UIkit.modal("#my-id").show();

     //step 02 : get all the infos
    //step 03 : save every info on board's array
  };

  render() {
    const MYCARD = styled.div`
      background: #e4f0f6;
      cursor: pointer;
      border: none;
      border-radius: 6%;
    `;

    return (
       <div>
        <MYCARD
            className="uk-card uk-card-default  uk-card-body"
            onClick={this.addNewBoard}
            >
            <h5 className="uk-text-center uk-text-middle">Create new board</h5>
            </MYCARD>
         <BoardPanel showModal={this.state.showModal}/>   
        </div> 
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boardReducer.boards,
  images: state.boardReducer.images
});
export default connect(
  mapStateToProps,
  { add_new_board }
)(CardCreateBoard);
