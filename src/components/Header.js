import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Header() {
  // create a state when clicking on hamburger menu header is shown
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="header">
      {/* if showHeader is true show cross else show header is false then show handburger */}
      {showHeader ? (
        <RiCloseFill
          //   write onclick event for RiCloseFill
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className="menu-icon position-fixed  top-0 end-0"
        />
      ) : (
        <RiMenu3Fill
          className="menu-icon position-fixed  top-0 end-0" //   write onclick event for RiCloseFill
          onClick={() => {
            setShowHeader(!showHeader);
          }}
        />
      )}
      {/* if showHeader is true then go apply show-header class if false apply hide-header class */}
      <ul className={`${showHeader ? "show-header" : "hide-header"} n-box1`}> 
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
