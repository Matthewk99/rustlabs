import React, { Component } from 'react';
import './ItemComp.css';

const ItemComponent2 = (props) => {
    const enviro = props.allEnviron.find(weapon => weapon.title === props.title)
    return (
      <div className="itemcomp">
        <div className="head">
          <h2>{enviro.title}</h2>
        </div>
        <div className="im">
          <img src={enviro.image} alt='weapon'></img>
        </div>
        <div className="desc">
          <h3>{enviro.desc}</h3>
        </div>
        <div className="bod">
          <h1>STATS</h1>
          </div>
      </div>
    )
}

export default ItemComponent2;