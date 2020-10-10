import React from 'react';
import './App.css';
import Map from './Map';
import Parmacy from './Parmarcy';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latlng: [0.0, 0.0],
        };
        this.onPositionChanged = this.onPositionChanged.bind(this);
    }

    onPositionChanged(lat, lng) {
        this.setState({latlng: [lat, lng]});
        console.log("position changed", lat, lng);
    }

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
                <Map onPositionChanged={this.onPositionChanged}></Map>
                <Parmacy latlng={this.state.latlng} ></Parmacy>
            </div>
        );
    }
}

export default App;
