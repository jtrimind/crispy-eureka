import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Pharmacy ({latlng, onStoreListUpdated, renew, setRenew}) {

  const [storeList, setStoreList] = useState([]);

  const getStoreList = async () => {
    // var url = 'https://congenial-spoon.web.app/pharmacy';
    var url = 'http://localhost:5000/pharmacy';
    const list = await Axios.get(url, {
      params: {
        WGS84_LAT: latlng[0],
        WGS84_LON: latlng[1],
        numOfRows: 30
      }
    });
    console.log(list);
    if (list.status === 200) {
      var items = list.data.response.body.items;
      console.log(items);
      if (items) {
        const item = items.item;
        const item_latlng = item.map(element => {
          var shopElement = {
            name: element.dutyName,
            tel: element.dutyTel1,
            startTime: element.startTime,
            endTime: element.endTime,
            addr: element.dutyAddr,
            latlng: [element.latitude, element.longitude],
          }
          return shopElement;
        });
        console.log(item_latlng);
        setStoreList(item_latlng);
      }
    }
  }

  useEffect(() => {
    getStoreList()
    .catch(error => {
      console.log(error);
    });
  }, [latlng]);

  useEffect(() => {
    onStoreListUpdated(storeList);
  }, [storeList]);

  useEffect(() => {
    if (renew == true) {
      console.log("renew");
      getStoreList()
        .catch(error => {
          console.log(error);
        });
      setRenew(false);
    }
  }, [renew])
  return (<div></div>);
}

export default Pharmacy;
