import React, { Component } from 'react';
import './ItemComp.css';

const ItemComponent = (props) => {
    const weapon = props.allWeapons.find(weapon => weapon.title === props.title) || props.allEnviron.find(weapon => weapon.title === props.title)
    return (
      <div className="itemcomp">
        <div className="containercolor"></div>
        <div className="head">
          <h2>{weapon.title}</h2>
        </div>
        <div className="im">
          <img src={weapon.image} alt='weapon'></img>
        </div>
        <div className="desc">
          <h3>{weapon.desc}</h3>
        </div>
        <div className="bod">
          <h1>STATS</h1>
          <p>{weapon.stat1}</p>
          <p>{weapon.stat2}</p>
          <p>{weapon.stat3}</p>
          </div>
      </div>
    )
}

export default ItemComponent;