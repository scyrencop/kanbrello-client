import React, { Component } from 'react';
import styled from 'styled-components';
import './board.scss';
class Board extends Component {
 
    render() {
      const MYBOARD = styled.div`
        border-radius: 4%;
        cursor : pointer;
        padding : 12px 6px;
        height : 140px;
        background : ${this.props.color} url(${this.props.image});
        background-size : cover;
     `;
     const TITLE  = styled.h4`
        font-weight: 400;
     
     `;
       return (
          <MYBOARD className="uk-card uk-card-default uk-card-body uk-card-hover">
            <TITLE className="uk-card-title">{this.props.title}</TITLE>
          </MYBOARD>
        );
    }
}

export default Board;