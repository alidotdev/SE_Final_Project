import MainTitle from "../Component/MainTitle";
// import image1 from "../Images/1.jpg";
// import image2 from "../Images/2.jpg";
// import image3 from "../Images/3.jpg";
// import image4 from "../Images/4.jpg";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const Description = () => {
  const productDes = useSelector((state) => state.products);
  const [counter, setCounter] = useState(0);
  console.log("In Product Description Page: ", productDes[0][0].Category);
  function incremental() {
    setCounter(counter + 1);
  }
  function decremental() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <MainTitle />
      <section className="container-fluid sproduct my-5 pt-5">
        <div className="row-mt-5" style={{ display: "flex", gap: "5rem" }}>
          <div className="col-lg-5 col-md-12 col-12">
            <div id="Image-box">
              <div className="large-img-group">
                {/* <div className="large-img-col">
                  <img
                    src={productDes[0][0].selectedFile}
                    width="100%"
                    className="small-img"
                    alt="Picture4"
                  />
                </div> */}

                {/* <div className="large-img-col">
                  <img
                    src={image3}
                    width="100%"
                    className="small-img"
                    alt="Picture5"
                  />
                </div>

                <div class="large-img-col">
                  <img
                    src={image4}
                    width="100%"
                    className="small-img"
                    alt="Picture6"
                  />
                </div> */}
              </div>
              <img
                src={productDes[0][0].selectedFile}
                className="img-fluid w-50 pb-1"
                alt="Picture3"
              />
            </div>
          </div>

          <div className="col-sm-6">
            <h6>
              {productDes[0][0]?.Category}/{productDes[0][0]?.SubCategory}/
              {productDes[0][0]?.Collection}
            </h6>
            <h3 className="py-4">{productDes[0][0]?.Title}</h3>
            <h2>{productDes[0][0]?.Price} PKR</h2>
            <select className="my-3">
              <option>Select Size</option>
              <option>XL</option>
              <option>Large</option>
              <option>Medium</option>
              <option>Small</option>
            </select>
            <div id="selection">
              <div id="counter">
                <div id="incremental" onClick={incremental}>
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div id="number">{counter}</div>
                <div id="decremental" onClick={decremental}>
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </div>
              </div>
              <button className="buy-btn">Add To Cart</button>
            </div>
            <h4 className="mt-5 mb-5">Product Details</h4>
            <h6 style={{ color: "grey" }}>{productDes[0][0]?.Description}</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Description;
