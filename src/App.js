import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import Parmacy from './Parmarcy';
import Info from './info';
import Search from './Search';
import Gps from './Gps';

function App() {
  const [latlng, setLatlng] = useState([37, 127]);
  const onPositionChanged = (lat, lng) => {
    console.log("position changed: " + lat + ' ' + lng);
    setLatlng([lat, lng]);
  };

  const [storeList, setStoreList] = useState([]);
  const onStoreListUpdated = (list) => {
    console.log(list);
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
        <Gps onPositionChanged={onPositionChanged} />
        <Map latlng={latlng} onPositionChanged={onPositionChanged} storeList={storeList} />
      </div>
      <Parmacy latlng={latlng} onStoreListUpdated={onStoreListUpdated} />
    </div>
  );
}

export default App;
