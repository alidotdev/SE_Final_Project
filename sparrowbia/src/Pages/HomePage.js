import React, { useState } from "react";
import { Typography, Icon, Container, AppBar } from "@mui/material";
import NavBar from "../Component/NavBar";
import Slider from "../Component/Slider";
import HomeBody from "../Component/HomeBody";
import Cards from "../Component/Cards";
import Footer from "../Component/footer";
import icon from "../Images/icon.png";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../actions/posts";
function HomePage() {
  const fetchProducts = useDispatch();
  const prod = useSelector((state) => state.products);
  useEffect(() => {
    fetchProducts(getProducts());
  }, []);
  const [category, setCategory] = useState("");

  return (
    <div>
      <AppBar className="appBar">
        <marquee>
          Free shipping on orders above Rs.2000 within Pakistan and shipping
          rate of 99 PKR on every local orders.
        </marquee>
      </AppBar>
      <Container maxWidth="sm" className="container">
        <Icon id="titleImage">
          <img className="icon" src={icon} />
        </Icon>
        <Typography className="title">SPARROWBIA</Typography>
        <div id="home--icons">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <i className="fa fa-heart" aria-hidden="true"></i>
          <Link id="Link" to="/Login">
            <i className="fa fa-user" aria-hidden="true"></i>{" "}
          </Link>
        </div>
      </Container>
      <NavBar item = {prod[0]}/>
      <Slider />
      <HomeBody />
      <Cards item = {prod[0]} />
      <Footer />
    </div>
  );
}
export default HomePage;
