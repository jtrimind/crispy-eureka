import React from 'react';
import './Map.css';
/*global kakao*/

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
        };
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

                this.setState({map: new window.kakao.maps.Map(container, options)});
                kakao.maps.event.addListener(this.state.map, 'dragend', () => {
                    var latlng = this.state.map.getCenter();
                    this.props.onPositionChanged(latlng.getLat(), latlng.getLng());
                });

            });
        };
    }
    render() {
        return (<div className='Map' id='map'></div>);
    }
}

export default Map;
