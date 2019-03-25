import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { connect } from 'react-redux';
import TruckMapMarker from "./TruckMapMarker";
import SearchLocation from '../Search/SearchLocation'
import * as actions from '../../actions'
import { style } from './style'


const TruckMapCard = withScriptjs(withGoogleMap(({ trucks, currentLocation, showLocation }) => {
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={ currentLocation }
      onClick={showLocation}
      >
      <TruckMapMarker />
      <div className="search-location">
        <SearchLocation />
      </div>
    </GoogleMap>
    );
  }
))

const mapStateToProps = (state) => {
  return {
    trucks: state.map.trucks,
    currentLocation: state.map.currentLocation
    };
};

export default connect( mapStateToProps, actions )(TruckMapCard);
