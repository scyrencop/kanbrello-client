import React, { Component } from 'react';
import styled from "styled-components";
class Card extends Component {
    render() {
        const MYCARD = styled.div`
            background: #e4f0f6;
            cursor: pointer;
            border: none;
            border-radius: 6%;
        `;
        return (
            <MYCARD className="uk-card uk-card-default uk-card-body">3</MYCARD>
        );
    }
}

export default Card;