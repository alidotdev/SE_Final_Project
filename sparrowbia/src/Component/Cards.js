import React from "react";
import Card1 from "../Images/mensCard.webp";
import Card2 from "../Images/mensCard2.webp";
import Card3 from "../Images/girlsCard.webp";
import Card5 from "../Images/girls2Card.webp";
import Card4 from "../Images/mensCard3.webp";


const kapray = [
  {
    title: "LONG OVERSIZED SHRUG",
    category: 'MEN',
    price: '3999'
  },
  {
    title: "T-SHirt for Men",
    category: 'MEN',
    price: '2099'
  },
  {
    title: "Female Jacket",
    category: 'FEMALE',
    price: '1099'
  },
  {
    title: "Khadija",
    category: 'KIDS',
    price: '1'
  }
];



export default function Cards({category}) {

  console.log(category === "" || category ===  null)
  return (
    <div className="card-group">
    {kapray.map((a,index)=>{
return(
    category === a.category ?  (
    <div className="card" id={index}>
      <img src={Card1} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-title">{a.title}</p>
        <div id="price-flex">
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          <p>PKR {a.price}</p>
        </div>
      </div>
    </div>
    ) : (
      category === "" || category ===  null ? (
        <div className="card" id={index}>
        <img src={Card1} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">{a.title}</p>
          <div id="price-flex">
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            <p>PKR {a.price}</p>
          </div>
        </div>
      </div>
      ): null

    )
)})}

</div>
  )
  
      /* <div className="card">
        <img src={Card2} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">POLYESTER PADDED JACKET</p>
          <div id="price-flex">
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            <p>PKR 3999</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={Card3} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">Upper With Pearl Detail</p>
          <div id="price-flex">
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            <p>PKR 3999</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={Card4} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">DENIM JACKET</p>
          <div id="price-flex">
            <i className ="fa fa-shopping-bag" aria-hidden="true"></i>
            <p>PKR 3999</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={Card5} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">SLEEVE EMBROIDERY SWEATSHIRT</p>
          <div id="price-flex">
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            <p>PKR 3999</p>
          </div>
        </div>
      </div> */

}