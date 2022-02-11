import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const path = window.location.pathname
  return (
    <div className="header">
      {showHeader ? (
        <RiCloseFill 
         onClick={()=>{setShowHeader(!showHeader)}}
        className="menu-icon position-fixed top-0 end-0" />
      ) : (
        <RiMenu3Fill className="menu-icon position-fixed top-0 end-0" onClick={()=>{setShowHeader(!showHeader)}}/>
      )}
        {/* if showHeader is true then go apply show-header class if false apply hide-header class */}
      <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box1`}>
          {/* if Path name is equal to active then change the border to white */}
          <li className={`${path=='/' && 'active'}`}><Link to='/'>Home</Link></li>
          <li className={`${path=='/projects' && 'active'}`}><Link to='projects'>Projects</Link></li>
          <li className={`${path=='/contact' && 'active'}`}><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
}

export default Header;