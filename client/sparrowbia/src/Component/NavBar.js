import React from "react";
import slider from "../Images/check.jpg";
import mens from "../Images/men.jpg";
import kids from "../Images/kid.png";
import accessories from "../Images/acc.webp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductsByCol } from "../actions/posts";
export default function NavBar() {
  //get Products
  const fetchProducts = useDispatch();
  const product = useSelector((state) => state.products);

  console.log(product);
  function changeParams(e) {
    let collection = e.target.textContent;
    let subCat = e.target.parentNode.parentNode.parentNode;
    let cat = subCat.parentNode.parentNode.firstChild.textContent;
    let sub_category = subCat.firstChild.textContent;
    fetchProducts(getProductsByCol(collection, cat, sub_category));
  }
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
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Unstiched
                </li>
              </Link>
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Pret
                </li>
              </Link>
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Luxury Pret
                </li>
              </Link>
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Western</span>
            <ul id="sub-Category">
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Absolute
                </li>
              </Link>
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Forever Teens
                </li>
              </Link>
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Bottoms
                </li>
              </Link>
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Jackets
                </li>
              </Link>
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Shoes</span>
            <ul id="sub-Category">
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Flats
                </li>
              </Link>
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Boots
                </li>
              </Link>
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Crossovers
                </li>
              </Link>
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Sneakers
                </li>
              </Link>
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Heels
                </li>
              </Link>
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Others</span>
            <ul id="sub-Category">
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Perfumes
                </li>
              </Link>
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Caps
                </li>
              </Link>
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Bags
                </li>
              </Link>
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
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Casual
                </li>
              </Link>
              <br />
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Semi-Formal
                </li>
              </Link>
              <br />
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Formal
                </li>
              </Link>
              <br />
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Exclusive
                </li>
              </Link>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Kurta</span>
            <ul id="sub-Category">
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Casual
                </li>
              </Link>
              <br />
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Semi-Formal
                </li>
              </Link>
              <br />
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Formal
                </li>
              </Link>
              <br />
            </ul>
          </li>
          <li id="categories" className="list-group-item">
            <span id="span-list">Grooms Collection</span>
            <ul id="sub-Category">
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Sherwani
                </li>
              </Link>
              <br />
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Turban
                </li>
              </Link>
              <br />
              <Link
                to="/Products"
                style={{
                  textDecoration: "none",
                  color: " rgb(87, 83, 83)",
                }}
              >
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => changeParams(e)}
                >
                  Special Kurta
                </li>
              </Link>
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
