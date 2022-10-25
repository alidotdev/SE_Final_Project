import React from "react";
import image1 from "./Orderimage1.png";
import image2 from "./Orderimage2.png";
import image3 from "./OrderImage3.png";
import image4 from "./orderimage4.png";
import Quantity from "./QuantityImage.png";
import Size from "./Size.png";
import sugges1 from "./Suggestion1.png"
import sugges2  from "./Suggestion2.png"
import sugges3 from "./Suggestion3.png"
export default function Orderpage() {
  return (
    <>
    <div id="Main" className="BaseClass">
      <div id="class2" className="sideclass">
        <img src={image2}></img>
        <img src={image3}></img>
        <img src={image4}></img>
      </div>
      <div id="class1" className="mainclass">
        <img src={image1}></img>
        <br />
        <br />
        <br />
        <b>Ochre Shirt For Men</b>
        <p>Price : 22$ sale: 22%</p>
      </div>
      <div id="class3" className="Article-Description">
        <b>Order Page</b>
        <p>Article Id: 111</p>
        <p>
          Quantity: <img src={Quantity}></img>
        </p>
        <p>
          Size: <img src={Size}></img>
        </p>
        <p>
         <b> Description:</b> A perfect everyday shirt - wear it under a suit for
          business
          <br/> 
          <b>Fabric:</b> Ochre Shirt are made from two fold 100% cotton poplin
          <br/>
          <b>Color:</b> Black 
          
          <br/>
         <b>Note: </b>The standard weave(2 100's) gives a durable yet
          smooth finish
          <br/> with a medium English fabric weight.
        </p>
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <p><b>You may also like</b></p><br/>
      <div id="Main2" className="Maindiv2">
      <div id="class4" className="Suggestion1">
      <img src={sugges1}></img>
        <br />
        <br />
        <br />
        <b>Ochre Shirt For Men</b>
        <p>Price : 22$ sale: 22%</p>
      </div>
      <div id="class5" className="Suggestion1">
      <img src={sugges2}></img>
        <br />
        <br />
        <br />
        <b>Ochre Shirt For Men</b>
        <p>Price : 22$ sale: 22%</p>
      </div>
      <div id="class6" className="Suggestion1">
      <img src={sugges3}></img>
        <br />
        <br />
        <br />
        <b>Ochre Shirt For Men</b>
        <p>Price : 22$ sale: 22%</p>
      </div>
      </div>
    </>
  );
}
