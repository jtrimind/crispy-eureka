import React from 'react';
import './App.css';
import Map from './Map';

class App extends React.Component {
  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      }, function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      });
    } else {
      console.log("Not Available");
    }
  }

  render() {
    return (
      <div className="app">
        <Map></Map>
      </div>
    );
  }
}

export default App;
