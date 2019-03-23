import React from 'react';
import { connect } from 'react-redux';
import TruckList from './TruckList'
import FilterRadius from './FilterRadius'

const TruckListContainer = ({ truckList }) => {

  const renderList = truckList.map(truck => <TruckList truck={truck} key={truck.id} /> )

  return (
    <div className="list">
      <FilterRadius />
      <h3>FoodTruck List</h3>
      { truckList.length === 0 ? <p>No Food Truck Here</p> : renderList }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    truckList: state.map.truckList
    };
};

export default connect(mapStateToProps)(TruckListContainer);
