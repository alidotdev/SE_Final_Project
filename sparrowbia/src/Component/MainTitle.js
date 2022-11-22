import React from "react";
import { Typography, Icon, Container, AppBar } from "@mui/material";
import icon from "../Images/icon.png";

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
        <Typography className="title">SPARROWBIA</Typography>
      </Container>
    </div>
  );
}
export default Title;