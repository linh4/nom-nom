/*global google*/
import axios from 'axios'
const google = window.google = window.google ? window.google : {}

export const getFoodTruckData = () => async dispatch => {
  try {
    const { data } = await axios.get('https://data.sfgov.org/resource/6a9r-agq8.json')
    const payload = data.filter(truck => (truck.latitude !== '0' && truck.longitude !== '0')).map(truck => {
      return {
        id: truck.objectid,
        address: truck.address,
        name: truck.applicant,
        foodItems: truck.fooditems,
        location: {
          lat: Number(truck.latitude),
          lng: Number(truck.longitude)
        },
        hours: truck.dayshours,
        isOpen: false
      }
    })
    dispatch({ type: 'FETCH_DATA', payload })
  }
  catch(err) {
    console.log(err)
  }
}

export const showInfo = (truck) => dispatch => {
  truck.isOpen = !truck.isOpen
  return dispatch({ type: 'GET_MARKER', truck  })
}

export const showLocation = (e) => dispatch => {
  let location = { lat: e.latLng.lat(), lng: e.latLng.lng() }
  return dispatch({ type: 'GET_LOCATION', location })
}

export const filterList = (trucks, currentLocation) => dispatch => {
  const truckList = trucks.filter(truck => {
    let currentPoint = new google.maps.LatLng(currentLocation.lat, currentLocation.lng)
    let currentTruck = new google.maps.LatLng(truck.location.lat, truck.location.lng)
    // takes in latitude and longitude of two location and returns the distance between them
    let result = google.maps.geometry.spherical.computeDistanceBetween(currentPoint, currentTruck)
    // get the trucks around the current location
    return Math.floor(result) < 1000
  })
  dispatch({ type: 'GET_LIST', truckList})
}

export const geoLocation = () => dispatch => {
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        const location = { lat: position.coords.latitude, lng: position.coords.longitude }
        dispatch({ type: 'GET_LOCATION', location})
      });
   } else{
      alert("Sorry, browser does not support geolocation!");
   }
}

export const backSFLocation = () => dispatch => {
  const location = { lat: 37.769067, lng: -122.432898}
  dispatch({ type: 'GET_LOCATION', location})
}
