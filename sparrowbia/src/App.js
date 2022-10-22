import React from "react";
//import libraries and components
import { Typography, Icon, Container, AppBar } from "@mui/material";
import NavBar from "./Component/NavBar";
import Slider from "./Component/Slider"
import Footer from "./Component/footer";
import HomeBody from "./Component/HomeBody";
//import css file here
import "./style.css";
//import Images from Images Folder
import icon from "./Images/icon.png";
function App() {
  return (
    <div>
      <AppBar className="appBar">
        <marquee>
          Free shipping on orders above Rs.2000 within Pakistan and shipping
          rate of 99 PKR on every local orders.
        </marquee>
      </AppBar>
      <Container maxWidth = "sm" className="container">
        <Icon id = "titleImage">
          <img className="icon" src={icon}  />
        </Icon>
        <Typography className="title">SPARROWBIA</Typography>
      </Container>
      <NavBar />
      <Slider />
      <HomeBody />
      <Footer />
    </div>
  );
}
export default App;
