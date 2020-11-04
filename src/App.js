import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from "@material-ui/icons/Search"
import './App.css';
import Map from './Map';
import Parmacy from './Parmarcy';

function App() {
  const [latlng, setLatlng] = useState([0, 0]);

  return (
    <div className="App">
      <div className="Top">
        당장약국
        <Button>
          <InfoIcon color="primary"/>
        </Button>
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
