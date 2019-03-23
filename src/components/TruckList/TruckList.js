import React from 'react';

const TruckList = ({ truck }) => {
  return (
    <div>
      <hr/>
      <h5>{truck.name}</h5>
      {truck.foodItems ? <p>{truck.foodItems}</p> : 'Unknown'}
      <p>Address: {truck.address}</p>
      <p>Distance: {truck.distance} miles</p>
      {truck.hours ? <p>Hours: {truck.hours}</p> : ''}
    </div>
  )
}

export default TruckList
