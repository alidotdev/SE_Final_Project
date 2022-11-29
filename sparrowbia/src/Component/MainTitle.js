import React from "react";
import { Typography, Icon, Container, AppBar } from "@mui/material";
import icon from "../Images/icon.png";
import { Link } from "react-router-dom";

function Title() {
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
        <Link to="/" className="Link-title"><Typography className="title">SPARROWBIA</Typography></Link>
      </Container>
    </div>
  );
}
export default Title;