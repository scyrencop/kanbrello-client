import React, { Component } from 'react';
import styled from 'styled-components';
/** redux part */
import {connect} from 'react-redux';
import {add_new_board} from '../actions/index'
class CardCreateBoard extends Component {
    
    addNewBoard = (e) => {
        
    }
    
    
    render() {
        const MYCARD = styled.div`
            background : #e4f0f6;
            cursor : pointer;
            border  : none;
            border-radius : 6%;     
        `;

        return (
            <MYCARD className="uk-card uk-card-default  uk-card-body" onClick={this.addNewBoard}>
                <h5 className="uk-text-center uk-text-middle">Create new board</h5>
            </MYCARD>
        );
    }
}

const mapStateToProps = state => ({
    boards: state.boardReducer.boards,
    images: state.boardReducer.images
})
export default connect(mapStateToProps , {add_new_board})(CardCreateBoard);