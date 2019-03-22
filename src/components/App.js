import '../App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import TruckMapContainer from './TruckMap/TruckMapContainer'
import TruckListContainer from './TruckList/TruckListContainer'

class App extends Component {

  componentDidMount() {
    this.props.getFoodTruckData()
  }

  geolocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <div className="container">
        <TruckMapContainer />
        <TruckListContainer />
        {this.geolocation()}
      </div>
    )
  }
}

export default connect( null, actions )(App);
