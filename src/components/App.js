import '../App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import TruckMapContainer from './TruckMap/TruckMapContainer'
import TruckListContainer from './TruckList/TruckListContainer'
import SearchContainer from './Search/SearchContainer'

class App extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.geoLocation}>My Location</button>
        <button onClick={this.props.backSFLocation}>Back to SF</button>
        <SearchContainer />

        <div className="container">
          <TruckMapContainer />
          <TruckListContainer />
          </div>
        </div>
    )
  }
}

export default connect( null, actions )(App);
