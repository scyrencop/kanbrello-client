import React, { Component } from 'react';
import styled from 'styled-components';
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
     const TITLE  = styled.h3`
        font-weight: 500;
     
     `;
       return (
        <MYBOARD className="uk-card uk-card-default uk-card-body uk-card-hover">
            <TITLE className="uk-card-title">arc gis learning</TITLE>
          </MYBOARD>
        );
    }
}

export default Board;