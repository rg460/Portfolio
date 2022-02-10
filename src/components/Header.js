import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function Header() {
  // create a state when clicking on hamburger menu header is shown
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="header">
      {/* if showHeader is true show cross else show header is false then show handburger */}
      {showHeader ? (
        <RiCloseFill
          //   write onclick event for RiCloseFill
          onClick={() =>{setShowHeader(!showHeader)}}
          className="menu-icon position-fixed  top-0 end-0"
        />
      ) : (
        <RiMenu3Fill className="menu-icon position-fixed  top-0 end-0" //   write onclick event for RiCloseFill
          onClick={() =>{setShowHeader(!showHeader)}} />
      )}
    </div>
  );
}

export default Header;
