//Tooling and Frameworks
import React, { Component } from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

//Styling Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const coffee = <FontAwesomeIcon icon={faCoffee} />
const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 39.09973, lng: -94.57857 }}
    >
      {props.isMarkerShown && <Marker
                                  position={{ lat: 39.09973, lng: -94.57857 }}
                                  icon={{
                                    url: coffee,
                                  }}/>}
    </GoogleMap>
))


export default MapComponent
