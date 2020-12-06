import React from 'react';
import { Button } from "@material-ui/core";
import { GpsFixed } from "@material-ui/icons";

function Gps({ setLatlng, setGps }) {
  return (
    <div className='Gps'>
      <Button onClick={() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            setLatlng([position.coords.latitude, position.coords.longitude]);
            setGps([position.coords.latitude, position.coords.longitude]);
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
