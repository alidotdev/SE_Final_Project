import MainTitle from "../Component/MainTitle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
//to update customer's Cart
import { getCart,updateCart } from "../actions/posts";
const Description = () => {
  const productDes = useSelector((state) => state.products);
  const cartData = useSelector((state) => state.cart);
  const [counter, setCounter] = useState(0);
  const mail = useSelector((state) => state.posts);
  const dispatchCart = useDispatch();
  const getDispatch = useDispatch();
  const [cartDat, setCartData] = useState({
    user: "",
    products: [
      {
        productID: "",
        quantity: 0,
      },
    ],
  });
  useEffect(() => {
    getDispatch(getCart(mail[0][0].Email));
  }, []);
  useEffect(() => {
    // console.log("Quantity: ", cartDat.products[0].quantity);
    // console.log("Outer Cart Data from API: ", cartData);
    if (cartDat.products[0].quantity > 0) {
      if (cartData[0].length > 0) {
        cartData[0][0].products.push(cartDat.products[0]);
        dispatchCart(
          updateCart({
            user: cartData[0][0].user,
            products: cartData[0][0].products,
          })
        );
      } else {
        dispatchCart(updateCart(cartDat));
      }
    }
  }, [cartDat]);
  // console.log("In Product Description Page: ", productDes[0][0].Category);
  function incremental() {
    setCounter(counter + 1);
  }
  function decremental() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  function addProductToCart() {
    if (mail.length > 0) {
      setCartData((cartDat) => {
        return {
          user: mail[0][0].Email,
          products: [
            {
              productID: productDes[0][0]._id,
              quantity: counter,
            },
          ],
        };
      });
    } else {
      alert("Login Before add something into the cart");
    }
  }
  return (
    <>
      <MainTitle />
      <section className="container-fluid sproduct my-5 pt-5">
        <div className="row-mt-5" style={{ display: "flex", gap: "5rem" }}>
          <div id="des-img" className="col-lg-5 col-md-12 col-12">
            <img
              src={productDes[0][0].selectedFile}
              className="img-fluid w-50 pb-1"
              alt="Picture3"
            />
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
              <button className="buy-btn" onClick={addProductToCart}>
                Add To Cart
              </button>
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
