import React from 'react';
import { SearchOutlined } from '../node_modules/@material-ui/icons';
import { InputBase } from '../node_modules/@material-ui/core';

function Search() {
  return (
    <div className='Search'>
        <SearchOutlined />
        <InputBase />
    </div>
  );
}

export default Search;
