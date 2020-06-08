import React from "react";

import './se-co-style.css'

export const SearchBox = ({placeholder, handChang}) => (
    <input
          className='search'
          type="search"
          placeholder={placeholder}
          onChange={handChang}
        />
    
)