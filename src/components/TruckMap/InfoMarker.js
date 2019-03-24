import React from 'react';
import { connect } from 'react-redux';

const InfoMarker = ({ thisTruck, currentLocation }) => {

  const url = `https://www.google.com/maps/dir/${currentLocation.lat}, ${currentLocation.lng}/${thisTruck.location.lat},${thisTruck.location.lng}/data=!3m1!4b1!4m4!4m3!1m0!1m1!4e1`

  return (
    <div>
      <h3>{thisTruck.name}</h3>
      <p>{thisTruck.foodItems}</p>
      <p>Distance: {thisTruck.distance} miles</p>
      <p>{thisTruck.hours ? thisTruck.hours : ''}</p>
      <a href={`${url},12z`} target="_blank" rel="noopener noreferrer">Direction in Google Maps</a>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    thisTruck: state.map.thisTruck,
    currentLocation: state.map.currentLocation
    };
};

export default connect( mapStateToProps )(InfoMarker);
