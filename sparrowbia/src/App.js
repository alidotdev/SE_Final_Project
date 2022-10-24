import React from "react";
//import libraries and components
import { Typography, Icon, Container, AppBar } from "@mui/material";
import NavBar from "./NavBar";
import Footer from "./footer";
//import PrivacyPolicyBody from "./PrivacyPolicyBody";
// import Cards from "./Cards"
import ContactUs from "./ContactUs"
//import css file here
import "./style.css";
//import Images from Images Folder
import icon from "./icon.png";
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
      {/* <PrivacyPolicyBody /> */}
      {/* {<Cards />} */}
      {<ContactUs/>}
      <Footer />
    </div>
  );
}
export default App;