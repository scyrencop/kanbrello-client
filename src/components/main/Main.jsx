import React, { Component } from "react";
import LoginImage from "../../images/login.jpg";
import Board from "../boards/Board";
import CardCreateBoard from '../boards/cardCreateBoard';
/**redux part */
import { connect } from "react-redux";
import { imagesFromUnsplsh } from "../../actions/index";


class Main extends Component {
  componentDidMount() {
    this.props.imagesFromUnsplsh();
  }

  render() {
    const { boards } = this.props;
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
            {boards.map(board => {
              return (
                <div key={board.id}>
                  <Board
                    image={board.image}
                    color={board.color}
                    title={board.title}
                  />
                </div>
              );
            })}
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
            {boards.map(board => {
              return (
                <div key={board.id}>
                  <Board
                    image={board.image}
                    color={board.color}
                    title={board.title}
                  />
                </div>
              );
            })}
            <div>
             <CardCreateBoard/>
            </div>
          </div>
          <div className="uk-margin">
            <a href="dd" className="uk-button uk-button-danger">
              Show More Boards
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
const mapStateToProps = state => ({
  boards: state.boardReducer.boards,
  images: state.boardReducer.images
});
export default connect(
  mapStateToProps,
  { imagesFromUnsplsh }
)(Main);