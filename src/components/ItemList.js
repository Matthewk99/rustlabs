import React from 'react';
import { Route, Link } from 'react-router-dom';
import ItemComponent from './ItemComponent';

const ItemList = (props) => {
    return (
        <div>
            {props.allWeapons.map(item => (
                <div>
                    <p>{item.title}</p>
                    <Link to={'/'+item.title}><img src={item.image} alt='weapon'></img></Link>
                </div>
                ))
            }
        </div>
    )
}

export default ItemList;