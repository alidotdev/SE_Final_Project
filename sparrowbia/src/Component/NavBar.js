import React from "react";
import slider from "../Images/check.jpg";
import mens from "../Images/men.jpg";
import kids from "../Images/kid.png";
import accessories from "../Images/acc.webp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../actions/posts";
export default function NavBar({ setCategory }) {
  const fetchProducts = useDispatch();
  const prod = useSelector((state) => state.products);
  useEffect(() => {
    fetchProducts(getProducts());
  }, []);
  console.log("Products ",prod)
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
          onClick={() => setCategory("FEMALE")}
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
              <li style={{ cursor: "pointer" }}>Unstiched</li>
              <li style={{ cursor: "pointer" }}>Pret</li>
              <li style={{ cursor: "pointer" }}>Luxury Pret</li>
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Western</span>
            <ul id="sub-Category">
              <li style={{ cursor: "pointer" }}>Absolute</li>
              {prod ? (
                <Link to = "/Products" state= "hey">
                  <li style={{ cursor: "pointer" }}>Forever Teens</li>
                </Link>
              ) : (
                <li style={{ cursor: "pointer" }}>Forever Teens</li>
              )}
              <li style={{ cursor: "pointer" }}>Bottoms</li>
              <li style={{ cursor: "pointer" }}>Jackets</li>
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Shoes</span>
            <ul id="sub-Category">
              <li style={{ cursor: "pointer" }}>Flats</li>
              <li style={{ cursor: "pointer" }}>Boots</li>
              <li style={{ cursor: "pointer" }}>Crossovers</li>
              <li style={{ cursor: "pointer" }}>Sneakers</li>
              <li style={{ cursor: "pointer" }}>Heels</li>
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Others</span>
            <ul id="sub-Category">
              <li style={{ cursor: "pointer" }}>Perfumes</li>
              <li style={{ cursor: "pointer" }}>Caps</li>
              <li style={{ cursor: "pointer" }}>Bags</li>
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
          onClick={() => setCategory("MEN")}
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
              <li style={{ cursor: "pointer" }}>Casual</li>
              <br />
              <li style={{ cursor: "pointer" }}>Semi-Formal</li>
              <br />
              <li style={{ cursor: "pointer" }}>Formal</li>
              <br />
              <li style={{ cursor: "pointer" }}>Exclusive</li>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Kurta</span>
            <ul id="sub-Category">
              <li style={{ cursor: "pointer" }}>Casual</li>
              <br />
              <li style={{ cursor: "pointer" }}>Semi-Formal</li>
              <br />
              <li style={{ cursor: "pointer" }}>Formal</li>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Grooms Collection</span>
            <ul id="sub-Category">
              <li style={{ cursor: "pointer" }}>Sherwani</li>
              <br />
              <li style={{ cursor: "pointer" }}>Turban</li>
              <br />
              <li style={{ cursor: "pointer" }}>Special Kurta</li>
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
          onClick={() => setCategory("KIDS")}
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
              <li style={{ cursor: "pointer" }}>Tops</li>
              <br />
              <li style={{ cursor: "pointer" }}>Dresses</li>
              <br />
              <li style={{ cursor: "pointer" }}>Jumpsuits</li>
              <br />
              <li style={{ cursor: "pointer" }}>Denim</li>
              <br />
              <li style={{ cursor: "pointer" }}>Skirts</li>
              <br />
              <li style={{ cursor: "pointer" }}>Night Suits</li>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Boys West</span>
            <ul id="sub-Category">
              <li style={{ cursor: "pointer" }}>Tops</li>
              <br />
              <li style={{ cursor: "pointer" }}>Outerwear</li>
              <br />
              <li style={{ cursor: "pointer" }}>Jumpsuits</li>
              <br />
              <li style={{ cursor: "pointer" }}>Denim</li>
              <br />
              <li style={{ cursor: "pointer" }}>Night Suits</li>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Boys East</span>
            <ul id="sub-Category">
              <li style={{ cursor: "pointer" }}>Kurtas</li>
              <br />
              <li style={{ cursor: "pointer" }}>Outfits</li>
              <br />
              <li style={{ cursor: "pointer" }}>WaistCoats</li>
              <br />
              <li style={{ cursor: "pointer" }}>Bottoms</li>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Girls East</span>
            <ul id="sub-Category">
              <li style={{ cursor: "pointer" }}>Kurtas</li>
              <br />
              <li style={{ cursor: "pointer" }}>Outfits</li>
              <br />
              <li style={{ cursor: "pointer" }}>Dupattas</li>
              <br />
              <li style={{ cursor: "pointer" }}>Bottoms</li>
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
          <li
            style={{ cursor: "pointer" }}
            id="menu-others-icon"
            className="list-group-item"
          >
            <img src={accessories} />
          </li>
          <li
            style={{ cursor: "pointer" }}
            id="categories"
            className="list-group-item"
          >
            <span id="span-list">Scarves</span>
          </li>
          <li
            style={{ cursor: "pointer" }}
            id="categories"
            className="list-group-item"
          >
            <span id="span-list">Belts</span>
          </li>
          <li
            style={{ cursor: "pointer" }}
            id="categories"
            className="list-group-item"
          >
            <span id="span-list">Hand Bags</span>
          </li>
          <li
            style={{ cursor: "pointer" }}
            id="categories"
            className="list-group-item"
          >
            <span id="span-list">Jewellery</span>
            <ul id="sub-Category">
              <li style={{ cursor: "pointer" }}>Earrings</li>
              <br />
              <li style={{ cursor: "pointer" }}>Necklace</li>
              <br />
            </ul>
          </li>
          <li
            style={{ cursor: "pointer" }}
            id="categories"
            className="list-group-item"
          >
            <span id="span-list">Fragnances</span>
            <ul id="sub-Category">
              <li style={{ cursor: "pointer" }}>Body Mists</li>
              <br />
              <li style={{ cursor: "pointer" }}>Perfumes</li>
              <br />
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
