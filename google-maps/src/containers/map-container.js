//Tooling and Frameworks
import React, { Component } from 'react'
//UI Assets
import '../css/map-styling.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
//Components
import MapComponent from '../components/map-component.js'


class MapContainer extends Component {
  static defaultProps = {
  center: {
    lat: 39.09973,
    lng: -94.57857
  },
  zoom: 11
};

  render(){
    return(
      <div className="map-container">
        <MapComponent zoom={this.props.zoom} center={this.props.center}/>
      </div>
    )
  }
}

export default MapContainer
