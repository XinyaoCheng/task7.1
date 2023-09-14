import React from 'react'
import "./Card.css";
import starImage from '../images/star.png';

const Card = (props) =>{
    return <div key = {props.key} className="item">
        
    <img src={props.
        avatar}/>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <div className="grade_container">
      <img src={starImage}></img>
      <p>{props.start}</p>
    </div>
  </div>
}

export default Card