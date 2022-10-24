import React from "react";
import image from "./Image.png"

export default function Cards() {
  return (
    <>
    <div id="Card1" className="Aboutuspage">
      <b>History</b>
      <p>
        Sparrowbia, a shopping hub for those who seek to buy the latest in
        fashion. Initially, only men's wear was available at the store, but
        later on clothing for women, children, teens, as well as formal wear was
        also added to the product list as expansion continued. In 2011, we took
        another bold initiative and gave a new look to all our outlets as part
        of our ‘New Outlook, New Outlet' strategy. This broke the monotonous
        theme of our outlets by making them more modern and different from
        others
      </p>
      <b>Brand Personality</b>
      <p>
        Sparrowbia can be defined as a fashion retail brand that is rich,
        elegant and stylish in traditional ensembles. It keeps adding seasonal
        clothes, machine prints, intricate embroidery and modern cuts to its
        already extensive collection on a regular basis. For our unique and
        flamboyant designs for men and women, we depend on a team of highly
        skilled fashion professionals who come from the country's renowned
        fashion institutes. They start out by studying the latest trends,
        carrying out research on how these trends can be adopted, selecting the
        colors and styles that can make the collection extraordinary and then
        finalizing both casual and formal designs for every season.
      </p>
    </div>
    <div id="Card2" className="AboutusPage" >
    <img src = {image}/>
    </div>
    </>
  );
}
