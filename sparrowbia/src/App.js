import "./App.css";
import React from "react";
import { AppBar, Container, Icon, Typography } from "@mui/material";
import NavBar from "./NavBar";
import icon from "./Images/icon.png";
import Marquee from "react-fast-marquee";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <AppBar className="appBar">
        <Marquee>
          Free shipping on orders above Rs.2000 within Pakistan and shipping
          rate of 99 PKR on every local orders.
        </Marquee>
      </AppBar>

      <div>
        <Container maxWidth="sm" className="container">
          <Icon id="titleImage">
            <img className="icon" src={icon} alt="Logo of SPARROWBIA" />
          </Icon>
          <Typography className="title">SPARROWBIA</Typography>
        </Container>
        {/* <NavBar /> */}
        <div>
          <h1 style={{display: 'flex', justifyContent: 'center'}}>FAQ</h1>
        </div>
      </div>
      <div className="Main">
        <p className="question">1-How can I place an order?</p>
        <p>
          Once you have added the desired items to your cart, follow the
          instructions:
        </p>
        <p className="question">To order as a guest</p>
        <p>Click on the shopping cart and proceed to checkout<br />
        Enter all the required information<br />
        Choose the payment method<br />
        Click 'Place Order'</p>

        <p className="question">To order with SPARROWBIA account</p>

        Login to your account<br />
        Click on the shopping cart and proceed to checkout<br />
        Enter all the required information<br />

        Choose the payment method<br />
        <p>Clicl 'Place Order'</p>

        <p className="question">2-How are the orders confirmed?</p>

        <p>
          The customer needs to enter the varification code after placing an
          oreder, so that orders are confirmed on spot
        </p>

        <p className="question">
          3-Does adding an item to the shopping cart reserve it?
        </p>

        <p>
          No, an item will only be reserved for you after you have confirmed
          your order at checkout
        </p>

        <p className="question">4-What is your estimated delivery time?</p>

        <p>
          Your order will be dispatched within 48-72hrs and will be handled over
          to the carier for delivery. However semetimes the order is delayed due
          to public holidays, unforeseen circumstances (weather, lockdowns), or
          during sales due to overwheiming responces. It could take 5-10 working
          days for an order to be delivered to the doorstep (depending on the
          customer location).
        </p>

        <p className="question">
          5-What are the delivery charges for local and international orders?
        </p>

        <p>
          FLAT shipping Rate 99 PKR on every local order. Free international
          shipping on your order over $150. International shipping rates are
          according to the weight of the parcel. These rates will be calculated
          once you're on the cart page.
        </p>

        <p className="question">6-How can I exchange my order?</p>

        <p>Please read our Returns, Refunds and exchange policy</p>

        <p className="question">7-How can I cancel my order?</p>
        <p>
          For order cancelation, please contact our customer services department
          within 24 hours of placing the order.
        </p>

        <p className="question">
          8-How do I contact customer services department?
        </p>

        <p>You can contact us by any of the following methods:</p>
        <ul>
          <li>By WhatsApp: +92 312 4922033</li>
          <li>By using our Website contact form</li>
          <li>By sending email to muhammadalimurtaza997@gmail.com</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
