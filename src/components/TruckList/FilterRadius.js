import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

const FilterRadius = ({ filterRadius }) => {

  const handleChange = (e) => {
    filterRadius(Number(e.target.value) * 1609.34)
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value="0.5">0.5 mile</option>
        <option value="1">1 mile</option>
        <option value="0.25">0.25 mile</option>
      </select>
    </div>
  )
}

export default connect(null, actions)(FilterRadius);