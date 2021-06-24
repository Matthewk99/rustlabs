import React from 'react';

const Items = (title, image, description) => {
    return (
        <div classname="container">
            <h3>Items</h3>
            <div classname="img-container">
                <img src={image} alt='' />
            </div>
            <div classname="container-content">
                <div classname="title-container">
                    <h2>{title}</h2>
                </div>
                <div classname="desc-conatiner">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Items;

// want to add:
// <h3>{props.item.title}</h3>
// <p>{props.item.image}</p>
// <p>{props.item.description}</p>
// but get error "TypeError: Cannot read property 'title' of undefined"