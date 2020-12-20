import React, { useEffect, useState } from 'react';
import { renderToStaticMarkup } from "react-dom/server"
import tippy from 'tippy.js';
import Shop from './Shop';

function Map({latlng, storeList, onPositionChanged, keyword, gps}) {
  const [kakao, setKakao] = useState(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=f5185fb09b4ee9df57bd6b168585bb8c&libraries=services&autoload=false";
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
          level: 5
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

      kakao.maps.event.addListener(map, 'zoom_changed', function () {
        const level = map.getLevel();
        if (level > 5) {
          map.setLevel(5)
        }
      });
    }
  }, [map])

  useEffect(() => {
    if (map) {
      map.panTo(new kakao.maps.LatLng(latlng[0], latlng[1]));
    }
  }, [latlng]);

  useEffect(() => {
    if (map && storeList) {
      storeList.forEach(store => {
        var position = new kakao.maps.LatLng(store.latlng[0], store.latlng[1]);
        var customOverlay = new kakao.maps.CustomOverlay({
          content: renderToStaticMarkup(<Shop name={store.name} />),
          position: position
        });
        customOverlay.setMap(map);

        tippy("[data-tippy-content]", {
          trigger: 'click',
          hideOnClick: true,
          allowHTML: true
        });
      });
    }
  }, [storeList])

  useEffect(() => {
    if (keyword) {
      console.log("keyword:", keyword);
      const places = new kakao.maps.services.Places();
      places.keywordSearch(keyword, (result, status) => {
        console.log(status)
        console.log(result)
        if (status === kakao.maps.services.Status.OK) {
          const {y, x} = result[0];
          console.log(y, x);
          const moveLatLng = new kakao.maps.LatLng(y, x);
          map.panTo(moveLatLng);
          map.setLevel(3);
        }
      })
    }
  }, [keyword])

  useEffect(() => {
    if (gps) {
      console.log("gps:", gps);
      const imageSize = new kakao.maps.Size(24, 35);
      const imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png";
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      var position = new kakao.maps.LatLng(gps[0], gps[1]);
      var marker = new kakao.maps.Marker({
        map: map,
        position: position,
        image: markerImage
      });
      marker.setMap(map);
    }
  }, [gps])

  return (
    <div id='map' className='Map'/>
  );
}

export default Map;
