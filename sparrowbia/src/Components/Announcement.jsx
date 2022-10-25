import React from "react";
import "./headerfooter.css";
const Announcement = () => {
  return (
    <div className="navbar" id="header">
      <marquee>
        Free shipping on orders above Rs.2000 within Pakistan and shipping rate
        of 99 PKR on every local orders.
      </marquee>
    </div>
  );
};

export default Announcement;
