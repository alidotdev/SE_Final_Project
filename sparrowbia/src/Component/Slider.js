import React from "react";
import slider1 from "./pret.png";
import slider2 from "./dex2.png";
import slider3 from "./mens.webp";

export default function Slider() {
  return (
    <div id="slider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider1} />
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100" alt="Exotic Fruits" />
        </div>
        <div className="carousel-item">
          <img src={slider2} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
