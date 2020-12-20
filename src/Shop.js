import React from 'react';
import { renderToStaticMarkup } from "react-dom/server"
import Icon from '@mdi/react'
import { mdiPill } from '@mdi/js';
import { Card } from '@material-ui/core';


const Shop = ({ name }) => {
  const Tooltip = () => (
    <Card>
      {name}
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
