import React from 'react';
import { renderToStaticMarkup } from "react-dom/server"
import Icon from '@mdi/react'
import { mdiPill } from '@mdi/js';
import { Card, Typography } from '@material-ui/core';


const Shop = ({ name, tel, startTime, endTime, addr }) => {
  const Tooltip = () => (
    <Card>
      <Typography>
        {name}
      </Typography>
      <ul>
        <li>전화번호: {tel}</li>
        <li>영업시간: {startTime} ~ {endTime}</li>
        <li>주소: {addr}</li>
      </ul>
      <br/>
    </Card>
  )

  return (
    <div data-tippy-content={renderToStaticMarkup(<Tooltip />)}>
      <Icon path={mdiPill}
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"
        spin />
    </div>
  )
}

export default Shop;
