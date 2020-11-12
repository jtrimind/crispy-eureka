import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Parmacy ({latlng, onStoreListUpdated}) {

  const [storeList, setStoreList] = useState([]);
  useEffect(() => {
    const getStoreList = async () => {
      var url = 'https://congenial-spoon.web.app/pharmacy';
      // var url = 'http://localhost:5000/pharmacy';
      const list = await Axios.get(url, {
        params: {
          WGS84_LAT: latlng[0],
          WGS84_LON: latlng[1]
        }
      });
      console.log(list);
      if (list.status === 200) {
        var items = list.data.response.body.items;
        console.log(items);
        if (items) {
          const item = items.item;
          const item_latlng = item.map(element => {
            return [element.latitude, element.longitude];
          });
          console.log(item_latlng);
          setStoreList(item_latlng);
        }
      }
    }
    getStoreList();
  }, [latlng]);

  useEffect(() => {
    onStoreListUpdated(storeList);
  }, [storeList]);

  return (<div></div>);
}

export default Parmacy;
