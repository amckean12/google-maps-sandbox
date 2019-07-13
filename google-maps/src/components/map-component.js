//Tooling and Frameworks
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

//Components
import MarkerComponent from './marker-component.js'

const MapComponent = (props) => {
  return(
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDC4k4yYUQZkSLE9ytWPB1uqh3kneG1SOk" }}
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
