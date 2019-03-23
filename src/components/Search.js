import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

const Search = ({ trucks, searchFood, radius }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    searchFood(trucks, e.target.food.value, radius)
    e.target.food.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="food"/>
        <input type="submit" value="Search Type Of Food"/>
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

export default connect(mapStateToProps, actions)(Search);
