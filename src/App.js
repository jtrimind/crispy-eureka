import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import Parmacy from './Parmarcy';

function App() {
  const [latlng, setLatlng] = useState([0, 0]);

  return (
    <div className="app">
      <Map onPositionChanged={(lat, lng) => {
        console.log("position changed: " + lat + ' ' + lng);
        setLatlng([lat, lng]);
      }} />
      <Parmacy latlng={ latlng } />
    </div>
  );
}

export default App;
