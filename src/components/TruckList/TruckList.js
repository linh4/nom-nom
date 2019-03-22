import React from 'react';

const TruckList = ({ truck }) => {
  return (
    <div>
      <hr/>
      <h5>{truck.name}</h5>
      <p>{truck.foodItems}</p>
      <p>Address: {truck.address}</p>
      {truck.hours ? <p>Hours: {truck.hours}</p> : ''}
    </div>
  )
}

export default TruckList
