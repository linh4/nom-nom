import React from "react";
import TruckMapCard from "./TruckMapCard";
import { API_KEY } from '../../keys.js'

const TruckMapContainer = () => (
  <div className="map">
    <TruckMapCard
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%`, width: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
)


export default TruckMapContainer
