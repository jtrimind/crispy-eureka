import React from 'react';
import './Map.css';
/*global kakao*/

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
    };
    this.onLocationButton = this.onLocationButton.bind(this);
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=f5185fb09b4ee9df57bd6b168585bb8c&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      console.log("script onload");
      kakao.maps.load(() => {
        console.log("kakao maps load");
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7
        };

        this.setState({ map: new window.kakao.maps.Map(container, options) });
        kakao.maps.event.addListener(this.state.map, 'dragend', () => {
          const latlng = this.state.map.getCenter();
          this.props.onPositionChanged(latlng.getLat(), latlng.getLng());
        });

      });
    };
  }

  onLocationButton() {
    console.log("btn click");
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition((position) => {
        const latlng = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
        console.log("lat:" + latlng.getLat() + " lng: " + latlng.getLng());
        this.state.map.panTo(latlng);
        this.props.onPositionChanged(latlng.getLat(), latlng.getLng());
      }, (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      });
    } else {
      console.log("Not Available");
    }
  }

  render() {
    return (
      <div>
        <div className='Map' id='map'>
        </div>
        <button onClick={this.onLocationButton}>Current Position</button>
      </div>);
  }
}

export default Map;
