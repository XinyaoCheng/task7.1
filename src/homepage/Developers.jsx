import React from 'react'
import Card from './Card'
import DeveloperList from './developerList'

const Developers = () => {
  return <div>
    <h3 className="title">Featured Freelancers</h3>
    <div className="introduction_container">
      {DeveloperList.map(item => (

        <Card
          key = {item.id}
          avatar={item.imageSrc}
          name={item.name}
          description={item.description}
          start={item.star}
        />
      ))}
    </div>
    <button type="button" class="btn btn-outline-secondary btn-custom">See More</button>
  </div>
}


export default Developers;