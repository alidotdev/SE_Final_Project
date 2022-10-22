import React from "react";
import Card1 from "./mensCard.webp";
import Card2 from "./mensCard2.webp";
import Card3 from "./girlsCard.webp";
import Card5 from "./girls2Card.webp";
import Card4 from "./mensCard3.webp";

export default function Cards() {
  return (
    <div className="card-group">
      <div className="card">
        <img src={Card1} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">LONG OVERSIZED SHRUG</p>
          <div id="price-flex">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <p>PKR 3999</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={Card2} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">POLYESTER PADDED JACKET</p>
          <div id="price-flex">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <p>PKR 3999</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={Card3} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">Upper With Pearl Detail</p>
          <div id="price-flex">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <p>PKR 3999</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={Card4} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">DENIM JACKET</p>
          <div id="price-flex">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <p>PKR 3999</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={Card5} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">SLEEVE EMBROIDERY SWEATSHIRT</p>
          <div id="price-flex">
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <p>PKR 3999</p>
          </div>
        </div>
      </div>
    </div>
  );
}
