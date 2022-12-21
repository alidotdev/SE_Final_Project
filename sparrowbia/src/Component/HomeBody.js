import React from "react";
import home1 from "../Images/home2.webp";
import home2 from "../Images/home3.webp";

export default function HomeBody() {
  return (
    <div id="homeBody">
      <p>Shop By Category</p>
      <p id="shop-by-text">
        MUST-HAVES FOR FALL <br /> Uplifting and eclectic embroideries, prints
        and silhouettes
      </p>
      <div id="images">
        <div id="bodyImage1">
          <img src={home1} />
          <p className="pret">LUXURY PRET</p>
          <a className="link" href="#">
            Shop Now
          </a>
        </div>
        <div id="bodyImage2">
          <img src={home2} />
          <p className="pret">FOREVER TEENS</p>
          <a className="link" href="#">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
