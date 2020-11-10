import React, { useEffect, useState } from 'react';

function Map({latlng, onPositionChanged}) {
  const [kakao, setKakao] = useState(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=f5185fb09b4ee9df57bd6b168585bb8c&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      setKakao(window.kakao);
    };
  }, []);

  const [map, setMap] = useState(null);
  useEffect(() => {
    if (kakao) {
      kakao.maps.load(() => {
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(latlng[0], latlng[1]),
          level: 7
        };

        setMap(new kakao.maps.Map(container, options));
      });
    }
  }, [kakao]);

  useEffect(() => {
    if (map) {
      kakao.maps.event.addListener(map, 'dragend', () => {
        const center = map.getCenter();
        onPositionChanged(center.getLat(), center.getLng());
      });
    }
  }, [map])

  useEffect(() => {
    if (map) {
      map.panTo(new kakao.maps.LatLng(latlng[0], latlng[1]));
    }
  }, [latlng]);

  return (
    <div id='map' className='Map'/>
  );
}

export default Map;
