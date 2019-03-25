import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

const TruckList = ({ truck, showInfo }) => {

  const handleClick = () => {
    showInfo(truck)
  }

  return (
    <div onClick={handleClick} className="list__item">
      <h3 className="list__item-heading">{truck.name}</h3>
      <div className="list__item-info">
        {truck.foodItems ? <p className="list__item-info-food">{truck.foodItems}</p> : 'Unknown'}
        <p>Address: {truck.address}</p>
        <p>Distance: {truck.distance} miles</p>
        {truck.hours ? <p>Hours: {truck.hours}</p> : ''}
      </div>
    </div>
  )
}

export default connect( null, actions )(TruckList)
