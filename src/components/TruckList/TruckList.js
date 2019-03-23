import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

const TruckList = ({ truck, showInfo }) => {

  const handleClick = () => {
    showInfo(truck)
  }

  return (
    <div onClick={handleClick} className="truck-item">
      <hr/>
      <h5>{truck.name}</h5>
      {truck.foodItems ? <p>{truck.foodItems}</p> : 'Unknown'}
      <p>Address: {truck.address}</p>
      <p>Distance: {truck.distance} miles</p>
      {truck.hours ? <p>Hours: {truck.hours}</p> : ''}
    </div>
  )
}

export default connect( null, actions )(TruckList)
