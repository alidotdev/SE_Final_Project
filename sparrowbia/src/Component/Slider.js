import React from "react";
import slider1 from "./pret.png";
import slider2 from "./dex2.png";
import slider3 from "./mens.webp";

export default function Slider() {
  return (
    <div id="slider" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={slider1} />
        </div>
        <div class="carousel-item">
          <img
            src={slider2}
            class="d-block w-100"
            alt="Exotic Fruits"
          />
        </div>
        <div class="carousel-item">
          <img src = {slider3} />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
