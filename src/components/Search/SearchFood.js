import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

const SearchFood = ({ trucks, searchTruck, radius }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    searchTruck(trucks, e.target.name.value.toLowerCase(), radius)
    e.target.name.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"/>
        <input type="submit" value="Search Food or Truck"/>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trucks: state.map.trucks,
    radius: state.map.radius
    };
};

export default connect( mapStateToProps, actions )(SearchFood);
