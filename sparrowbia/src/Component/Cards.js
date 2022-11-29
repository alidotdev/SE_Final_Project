import React from "react";
export default function Cards(props) {
  props = props.item;
  return (
    <div className="card-group">
      {props?.map((a, index) => {
        return (
          <div className="card" id={index}>
            <img src={a.selectedFile} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title">{a.Title}</p>
              <div id="price-flex">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <p>PKR {a.Price}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
