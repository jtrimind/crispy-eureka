import React from 'react';
import { Button } from "../node_modules/@material-ui/core";
import { GpsFixed } from "../node_modules/@material-ui/icons";

function Gps({ onPositionChanged }) {
  return (
    <div className='Gps'>
      <Button onClick={() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            onPositionChanged(position.coords.latitude, position.coords.longitude);
          }, (error) => {
            console.error("Error Code = " + error.code + " - " + error.message);
          });
        } else {
          console.log("Not Available");
        }
      }}>
        <GpsFixed />
      </Button>
    </div>
  );
}

export default Gps;
