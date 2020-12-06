import React, {useState} from 'react';
import { Search } from '@material-ui/icons';
import { InputBase } from '@material-ui/core';

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  return (
    <div className='SearchBar'>
      <Search style={{color: "black"}} />
      <InputBase
        value={searchText}
        onChange = {e => setSearchText(e.target.value)}
        onKeyPress={e => {
          const enterPressed = e.key === 'Enter'
          if (enterPressed) {
            onSearch(searchText)
          }
        }}
      />
    </div>
  );
}

export default SearchBar;
