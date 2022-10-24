import React from "react";
import slider from "./Images/check.jpg";
import mens from "./Images/men.jpg";
import kids from "./Images/kid.png";
import accessories from "./Images/acc.png";
import './style.css';

export default function NavBar() {
  return (
    <nav className="navbar navBar">
      <div id="drop" className="dropdown">
        <button
          className="btn btn-link nav-items"
          type="button"
          id="dropdownMenu1"
          data-bs-toggle="dropdown"
          data-hover="dropdown"
          aria-expanded="false"
        >
          Women
        </button>
        <ul id="menu1" className="list-group dropdown-menu">
          <li id="menu-icon" className="list-group-item">
            <img src={slider} />
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Eastern</span>
            <ul id="sub-Category">
              <li>Unstiched</li>
              <li>Pret</li>
              <li>Luxury Pret</li>
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Western</span>
            <ul id="sub-Category">
              <li>Absolute</li>
              <li>Forever Teens</li>
              <li>Bottoms</li>
              <li>Jackets</li>
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Shoes</span>
            <ul id="sub-Category">
              <li>Flats</li>
              <li>Boots</li>
              <li>Crossovers</li>
              <li>Sneakers</li>
              <li>Heels</li>
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Others</span>
            <ul id="sub-Category">
              <li>Perfumes</li>
              <li>Caps</li>
              <li>Bags</li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="drop2" className="dropdown">
        <button
          className="btn btn-link nav-items"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          data-hover="dropdown"
          aria-expanded="false"
        >
          Men
        </button>
        <ul id="menu2" className="list-group dropdown-menu">
          <li id="menu-icon" className="list-group-item">
            <img src={mens} />
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Kameez Shalwar</span>
            <ul id="sub-Category">
              <li>Casual</li>
              <br />
              <li>Semi-Formal</li>
              <br />
              <li>Formal</li>
              <br />
              <li>Exclusive</li>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Kurta</span>
            <ul id="sub-Category">
              <li>Casual</li>
              <br />
              <li>Semi-Formal</li>
              <br />
              <li>Formal</li>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Grooms Collection</span>
            <ul id="sub-Category">
              <li>Sherwani</li>
              <br />
              <li>Turban</li>
              <br />
              <li>Special Kurta</li>
              <br />
            </ul>
          </li>
        </ul>
      </div>
      <div id="drop3" className="dropdown">
        <button
          className="btn btn-link nav-items"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          data-hover="dropdown"
          aria-expanded="false"
        >
          Kids
        </button>
        <ul id="menu3" className="list-group dropdown-menu">
          <li id="menu-others-icon" className="list-group-item">
            <img src={kids} />
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Girls West</span>
            <ul id="sub-Category">
              <li>Tops</li>
              <br />
              <li>Dresses</li>
              <br />
              <li>Jumpsuits</li>
              <br />
              <li>Denim</li>
              <br />
              <li>Skirts</li>
              <br />
              <li>Night Suits</li>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Boys West</span>
            <ul id="sub-Category">
              <li>Tops</li>
              <br />
              <li>Outerwear</li>
              <br />
              <li>Jumpsuits</li>
              <br />
              <li>Denim</li>
              <br />
              <li>Night Suits</li>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Boys East</span>
            <ul id="sub-Category">
              <li>Kurtas</li>
              <br />
              <li>Outfits</li>
              <br />
              <li>WaistCoats</li>
              <br />
              <li>Bottoms</li>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Girls East East</span>
            <ul id="sub-Category">
              <li>Kurtas</li>
              <br />
              <li>Outfits</li>
              <br />
              <li>Dupattas</li>
              <br />
              <li>Bottoms</li>
              <br />
            </ul>
          </li>
        </ul>
      </div>
      <div id="drop4" className="dropdown">
        <button
          className="btn btn-link nav-items"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          data-hover="dropdown"
          aria-expanded="false"
        >
          Other Accessories
        </button>
        <ul id="menu4" className="list-group dropdown-menu">
          <li id="menu-others-icon" className="list-group-item">
            <img src={accessories} />
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Scarves</span>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Belts</span>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Hand Bags</span>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Jewellery</span>
            <ul id="sub-Category">
              <li>Earrings</li>
              <br />
              <li>Necklace</li>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Fragnances</span>
            <ul id="sub-Category">
              <li>Body Mists</li>
              <br />
              <li>Perfumes</li>
              <br />
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
