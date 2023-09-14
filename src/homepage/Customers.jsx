import React from 'react'
import "./styles.css";
import Card from './Card';
import customerList from './customerList';

const Customers = () =>{
  return <div>
    <h3 className="title">Featured Customers</h3>
    <div className="introduction_container">
      {customerList.map(item => (

        <Card
          key = {item.id}
          avatar={item.imageSrc}
          name={item.name}
          description={item.description}
          start={item.star}
        />
      ))}
    </div>
    <button type="button" class="btn btn-outline-secondary btn-custom">See All Customers</button>
  </div>
}



export default Customers;