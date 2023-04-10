import React from 'react'
import './Search.css'

function Search() {
  return (
    <div>
        <div className="search-c">
        <img src="/image/search.svg" alt="" />
        <input
          type="text"
          placeholder="جست و جو برای دسته بندی"
        />
      </div>
    </div>
  )
}

export default Search