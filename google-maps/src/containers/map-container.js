//Tooling and Frameworks
import React, { Component } from 'react'

//Components
import MapComponent from '../components/map-component.js'

//UI Assets
import '../css/map-styling.css'

class MapContainer extends Component {
  render(){
    return(
      <div className="map-container">
      <MapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
    )
  }
}

export default MapContainer
