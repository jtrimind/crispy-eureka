import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search"
import './App.css';
import Map from './Map';
import Parmacy from './Parmarcy';
import Info from './info'

function App() {
  const [latlng, setLatlng] = useState([0, 0]);

  return (
    <div className="App">
      <div className="Top">
        당장약국
        <Info/>
        <SearchIcon />
        <input></input>
      </div>
      <Map onPositionChanged={(lat, lng) => {
        console.log("position changed: " + lat + ' ' + lng);
        setLatlng([lat, lng]);
      }} />
      <Parmacy latlng={ latlng } />
    </div>
  );
}

export default App;
