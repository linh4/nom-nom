export const showInfo = (truck) => dispatch => {
  truck.isOpen = !truck.isOpen
  return dispatch({ type: 'GET_MARKER', truck  })
}

export const showLocation = (e) => dispatch => {
  let location = { lat: e.latLng.lat(), lng: e.latLng.lng() }
  return dispatch({ type: 'GET_LOCATION', location })
}

export const geoLocation = () => dispatch => {
  if(navigator.geolocation){
      return navigator.geolocation.getCurrentPosition(position => {
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

export const searchFood = (trucks, term, radius) => dispatch => {
  console.log(term)
  let truckList = trucks.filter(t => t.foodItems && t.foodItems.toLowerCase().includes(term) && (t.distance * 1609.34) <= radius)
  dispatch({ type: 'GET_LIST', truckList })
}
