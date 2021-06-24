import React from 'react';

const Items = (props) => {
    return (
        <div classname="container">
            <h3>Items</h3>
        </div>
    )
}

export default Items;

// want to add:
// <h3>{props.item.title}</h3>
// <p>{props.item.image}</p>
// <p>{props.item.description}</p>
// but get error "TypeError: Cannot read property 'title' of undefined"