import React from 'react';
import MapContainer from './containers/map-container.js'
import LegendContainer from './containers/legend-container.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <MapContainer />
      <LegendContainer />
    </div>
  );
}

export default App;
