/*global google*/
import React, { useEffect } from 'react';
import { Marker, InfoWindow} from "react-google-maps";
import { connect } from 'react-redux';
import * as actions from '../../actions'
import InfoMarker from './InfoMarker'

// set global google to use google maps api
const google = window.google = window.google ? window.google : {}
// animation={google.maps.Animation.DROP}
const TruckMapMarker = ({ thisTruck, showInfo, trucks, isOpen, currentLocation, filterList, truckList, radius }) => {

  useEffect(() => {
    trucks && filterList(trucks, currentLocation, radius)
  },[trucks, currentLocation, radius])

  const renderTrucks = () => {
    return truckList && truckList.map(truck => {
      return (
        <Marker
          key={truck.id}
          position={truck.location}
          animation={google.maps.Animation.DROP}
          icon={{
            url: "images/food-truck.svg",
            scaledSize: new google.maps.Size(50, 50)
          }
          }
          onClick={() => showInfo(truck)}
        >
        { isOpen && truck === thisTruck &&
          <InfoWindow position={truck.location}>
            <InfoMarker />
          </InfoWindow>
        }
        </Marker>
      )
    })
  }

  return (
    <div>
    {renderTrucks()}
      <Marker
        position={currentLocation}
        animation={0}
        icon={{
          url: "images/marker.svg",
          scaledSize: new google.maps.Size(32, 32)
        }}
      >
      </Marker>
    </div>
  )
}

const mapStateToProps = (state) => {
  const {trucks, isOpen, currentLocation, thisTruck, truckList, radius } = state.map
  return {
    trucks,
    isOpen,
    currentLocation,
    thisTruck,
    truckList,
    radius
    };
};

export default connect( mapStateToProps, actions )(TruckMapMarker);
