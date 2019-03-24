/* global google */
import React, { useEffect, useRef } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions'

const SearchLocation = ({ searchLocation }) => {

  const inputEl = useRef(null);

  let autocomplete;

  useEffect(() => {
    autocomplete = new google.maps.places.Autocomplete(
      inputEl.current,
      { types: ["geocode"] }
    );
    autocomplete.addListener("place_changed", () => {
      handlePlaceChanged()
    });
  },[])

   // Get the place details from the autocomplete object.
  const handlePlaceChanged = () => {
    const place = autocomplete.getPlace();
    searchLocation(place.geometry.location.lat(), place.geometry.location.lng())
  }

  const handleDone = () => {
    inputEl.current.value = ''
  }

  return (
    <div>
      <input
      ref={inputEl}
      id="autocomplete"
      placeholder="Enter your address"
      type="text"
      />
      <button onClick={handleDone}>X</button>
    </div>
  )
}

export default connect( null, actions )(SearchLocation);
