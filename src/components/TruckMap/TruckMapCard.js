import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { connect } from 'react-redux';
import TruckMapMarker from "./TruckMapMarker";
import SearchLocation from '../Search/SearchLocation'
import * as actions from '../../actions'
import { style } from '../styleMap'


const TruckMapCard = withScriptjs(withGoogleMap(({ trucks, currentLocation, showLocation }) => {
  return (
    <GoogleMap
      defaultOptions={{ styles: style }}
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

// TruckMapCard.defaultProps = {
//   // The style is copy from https://snazzymaps.com/style/2/midnight-commander
//   mapStyles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
// }

export default connect( mapStateToProps, actions )(TruckMapCard);
