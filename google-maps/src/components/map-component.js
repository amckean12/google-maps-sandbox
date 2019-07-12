//Tooling and Frameworks
import React, { Component } from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 39.09973, lng: -94.57857 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 39.09973, lng: -94.57857 }} />}
    </GoogleMap>
))


export default MapComponent
