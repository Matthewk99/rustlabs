import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Card.css';
import ItemList from '../ItemList.js';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemsToDisplay: props.Items
        };
    }

    render() {
        return(
            <div className="Card">
                <div className="header">
                    
                </div>
                <div className="body">
                    <h2><ItemList allWeapons={this.props.Items} /></h2>
                </div>
            </div>
        )
    }
}


export default Card;

