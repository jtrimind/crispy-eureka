import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import Pharmacy from './Pharmarcy';
import Info from './info';
import SearchBar from './SearchBar';
import Gps from './Gps';
import { Button } from '@material-ui/core';
import { Autorenew, FilterList } from '@material-ui/icons';

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

  const [keyword, setKeyword] = useState("");

  const [gps, setGps] = useState();

  return (
    <div className="App">
      <div className="Top">
        당장약국
        <Info />
        <SearchBar onSearch={setKeyword} />
      </div>
      <div className="MapContent">
        <div className="MapControl">
          <Gps setLatlng={setLatlng} setGps={setGps} />
          <div className="Renew">
            <Button>
              <Autorenew></Autorenew>
            </Button>
          </div>
          <Button>
            <FilterList/>
          </Button>
        </div>
        <Map latlng={latlng} onPositionChanged={onPositionChanged} storeList={storeList} keyword={keyword} gps={gps} />
      </div>
      <Pharmacy latlng={latlng} onStoreListUpdated={onStoreListUpdated} />
    </div>
  );
}

export default App;
