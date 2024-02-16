import React, { useState } from 'react'
import './Submenu.css'
import SearshBar from '../SearchBar/SearchBar'
import Toggle from '../Toggle/Toggle'
import Sublinl from '../Sub-Link/Sublink'
const Submenu = ({ isNightMode, onToggle }) => {
 
  return (
    <>
      <div className="submenu">
        <Toggle 
       isNightMode={isNightMode} onToggle={onToggle}/>
        <Sublinl/>
        <SearshBar />
      </div>
    </>
  )
}

export default Submenu;