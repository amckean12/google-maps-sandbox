////Tooling and Frameworks
import React from 'react';

//Containers
import MapContainer from './containers/map-container.js'
import LegendContainer from './containers/legend-container.js'

//Styling
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
