import React from 'react';
import { connect } from 'react-redux';
import TruckList from './TruckList'

const TruckListContainer = ({ truckList }) => {

  if (truckList.length === 0) {
    return (
      <div className="list">
        <h3>FoodTruck List</h3>
        <p>No Food Truck Here</p>
      </div>
    )
  }

  const renderList = truckList.map(truck => <TruckList truck={truck} key={truck.id}/>)

  return (
    <div className="list">
      <h3>FoodTruck List</h3>
      {renderList}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    truckList: state.map.truckList
    };
};

export default connect(mapStateToProps)(TruckListContainer);
