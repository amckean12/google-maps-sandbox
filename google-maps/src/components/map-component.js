//Tooling and Frameworks
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

//Components
import MarkerComponent from './marker-component.js'

//Keys
import {GOOGLE_API_KEY} from '../google_api_key'

const MapComponent = (props) => {
  return(
    <div style={{ height: '100vh', width: '100%' }}>
      {console.log(GOOGLE_API_KEY)}
      <GoogleMapReact
          bootstrapURLKeys={{ key: `${GOOGLE_API_KEY}`}}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
        <MarkerComponent
            lat={props.center.lat}
            lng={props.center.lng}
            />
      </GoogleMapReact>
    </div>
  )
}

export default MapComponent
