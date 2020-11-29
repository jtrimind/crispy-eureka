import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import Pharmacy from './Pharmarcy';
import Info from './info';
import Search from './Search';
import Gps from './Gps';
import { Button } from '@material-ui/core';
import { Autorenew } from '@material-ui/icons';

function App() {
  const [latlng, setLatlng] = useState([37, 127]);
  const onPositionChanged = (lat, lng) => {
    console.log("position changed: " + lat + ' ' + lng);
    setLatlng([lat, lng]);
  };

  const [storeList, setStoreList] = useState([]);
  const onStoreListUpdated = (list) => {
    setStoreList(list);
  }
  return (
    <div className="App">
      <div className="Top">
        당장약국
        <Info />
        <Search />
      </div>
      <div className="MapContent">
        <div className="MapControl">
          <Gps onPositionChanged={onPositionChanged} />
          <div className="Renew">
            <Button>
              <Autorenew></Autorenew>
            </Button>
          </div>
        </div>
        <Map latlng={latlng} onPositionChanged={onPositionChanged} storeList={storeList} />
      </div>
      <Pharmacy latlng={latlng} onStoreListUpdated={onStoreListUpdated} />
    </div>
  );
}

export default App;
