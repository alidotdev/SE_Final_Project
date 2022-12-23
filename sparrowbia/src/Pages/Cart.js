import { useDispatch, useSelector } from "react-redux";
import { getCart, fetchProductsbyIDS, updateCart } from "../actions/posts";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const mail = useSelector((state) => state.posts);
  const prod = useSelector((state) => state.products);
  const getCartDispatch = useDispatch();
  const getProductsById = useDispatch();
  const dispatchCart = useDispatch();
  const navigate = useNavigate();
  console.log(cartData);
  function goto() {
    navigate("/");
  }
  useEffect(() => {
    if (mail.length > 0) {
      getCartDispatch(getCart(mail[0][0].Email));
    }
  }, [mail]);
  useEffect(() => {
    if (cartData[0]?.products.length > 0) {
      const y = cartData[0]?.products.map((x) => {
        return x.productID;
      });
      console.log(y);
      getProductsById(fetchProductsbyIDS(y));
    }
  }, [cartData]);
  console.log(prod);
  // functions to handle Cart's Product Quantity
  function incremental(quant, id) {
    let count = quant;
    count = count + 1;
    let newCartData = cartData[0].products.filter(
      (item) => item.productID == id
    )[0];
    newCartData = { ...newCartData, quantity: quant + 1 };

    console.log(quant);
    console.log(cartData);
    console.log(newCartData);
    dispatchCart(
      updateCart([[{ user: cartData[0].user, products: newCartData }]])
    );
  }
  function decremental(quant, id) {
    let count = quant;
    count = count - 1;
    if (count >= 0) {
      let newCartData = cartData[0].products.filter(
        (item) => item.productID == id
      )[0];
      newCartData = { ...newCartData, quantity: count };
      console.log(quant);
      console.log(cartData);
      console.log(newCartData);
      dispatchCart(
        updateCart([[{ user: cartData[0].user, products: newCartData }]])
      );
    }
  }
  return (
    <>
      {mail.length > 0 ? (
        <main>
          <div>
            <div className="small-container cart-page">
              {prod.length === 0 ? (
                <div className="container justify-content-center align-items-center">
                  <div className="justify-content-center align-items-center text-center">
                    <h1>Your Cart</h1>
                    <p className="mt-4">Your Cart is currently empty</p>
                    <button className="continue-btn">CONTINUE SHOPING</button>
                  </div>
                </div>
              ) : cartData?.length > 0 ? (
                <>
                  <table class="table table-borderless">
                    <thead className="table-header">
                      <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <div className="separator" />
                      {prod.length > 0 ? (
                        prod[0].map((product, index) => (
                          <>
                            <tr>
                              <td scope="row">
                                <div className="cart-info">
                                  <img
                                    className="product-img"
                                    src={product.selectedFile}
                                  />
                                  <div>
                                    <p>{product.Title}</p>
                                    <small>Price: {product.Price} PKR</small>
                                    <br />
                                  </div>
                                </div>
                              </td>
                              <td>{product?.Price} PKR</td>
                              <td>
                                {cartData[0]?.products?.map((x) => {
                                  return x?.productID == product?._id ? (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                      }}
                                    >
                                      <button
                                        className="quantity-btn"
                                        onClick={(e) => {
                                          decremental(x.quantity, x.productID);
                                        }}
                                      >
                                        -
                                      </button>
                                      <p className="product-quantity">
                                        {x.quantity}
                                      </p>

                                      <button
                                        className="quantity-btn"
                                        onClick={(e) => {
                                          incremental(x.quantity, x.productID);
                                        }}
                                      >
                                        +
                                      </button>
                                    </div>
                                  ) : (
                                    <p></p>
                                  );
                                })}
                              </td>
                              <td>
                                <i className="fa fa-remove remove-product"></i>
                              </td>
                            </tr>
                            <div className="separator" />
                          </>
                        ))
                      ) : (
                        <p></p>
                      )}
                    </tbody>
                  </table>

                  <div className="container d-flex flex-column justify-content-center align-items-center">
                    <button className="continue-btn complete-btn">
                      CHECK OUT
                    </button>
                    <button
                      className="continue-btn complete-btn"
                      onClick={goto}
                    >
                      CONTINUE SHOPING
                    </button>
                    <button
                      className="continue-btn complete-btn"
                      onClick={goto}
                    >
                      HOME
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </main>
      ) : (
        <p id="login-check">Login required to view Cart Products</p>
      )}
    </>
  );
};
export default Cart;
