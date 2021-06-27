import React from 'react';
import './Card.css';

const Card = ({ src, alt, title, description, width = '100px', height = '200px' }) => {
    return (
        <div classname="Card" style={{ width: width, height: height}}>
            <div classname="header">
                <img src={src} alt={alt} style={{ width: width, height: 'calc(0.5 * ' + height + ')'}}/>
            </div>
            <div classname="body" style={{ width: width, height: 'calc(0.5 * ' + height + ')'}}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;