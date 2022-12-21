import { useDispatch, useSelector } from "react-redux";
import { getCart, fetchProductsbyIDS, updateCart } from "../actions/posts";
import { useEffect, useState } from "react";
import Product from "../Component/Product";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const mail = useSelector((state) => state.posts);
  const pro = useSelector((state) => state.products);
  const getCartDispatch = useDispatch();
  const getProductsById = useDispatch();
  const dispatchCart = useDispatch();
  const [cartUpdate, setCartUpdate] = useState({});
  var productUpdated = [];
  useEffect(() => {
    if (mail.length > 0) {
      getCartDispatch(getCart(mail[0][0].Email));
    } else {
      alert("First Login to view Carts product");
    }
  },[]);
  // console.log("Cart type: ", cartData)
  useEffect(() => {
    if (cartData.length > 0) {
      // console.log(cartData[0][0])
      setCartUpdate(cartData[0][0]);
      const y = cartData[0][0].products.map((x) => {
        return x.productID;
      });

      const quantity = cartData[0][0].products.map((x) => {
        return x.quantity;
      });
      getProductsById(fetchProductsbyIDS(y));
    }
  }, [cartData]);
  const [counter, setCounter] = useState(0);
  //functions to handle Cart's Product Quantity
  function incremental(target, id) {
    productUpdated = []
    let count = target;
    count = count + 1;
    // console.log(cartUpdate.products);
    for (var i = 0; i < cartUpdate.products.length; i++) {
      if (cartUpdate.products[i].productID == id) {
        productUpdated.push({
          productID: cartUpdate.products[i].productID,
          quantity: count,
        });
      } else {
        productUpdated.push({
          productID: cartUpdate.products[i].productID,
          quantity: cartUpdate.products[i].quantity,
        });
      }
    }
    // console.log(cartUpdate.user);
    // console.log("product Array", cartUpdate.products);
    console.log('calling Update Cart : ')
    console.log({ user: cartUpdate.user, products: productUpdated})
    dispatchCart(
      updateCart({ user: cartUpdate.user, products: productUpdated})
    );
  }
  function decremental(target, id) {
    let count = target;
    // console.log(target);
    if (count > 0) {
      count = count - 1;
    }
    // console.log(cartUpdate);
    for (var i = 0; i < cartUpdate.products.length; i++) {
      if (cartUpdate.products[i].productID == id) {
        productUpdated.push({
          productID: cartUpdate.products[i].productID,
          quantity: count,
        });
      } else {
        productUpdated.push({
          productID: cartUpdate.products[i].productID,
          quantity: cartUpdate.products[i].quantity,
        });
      }
    }
    // console.log(cartUpdate.user);
    // console.log("product Array", cartUpdate.products);
    dispatchCart(
      updateCart({ user: cartUpdate.user, products: productUpdated}));
  }
  // console.log("final updated object for cart: ", cartUpdate);
  return (
    <main>
      <div>
        <div className="small-container cart-page">
          {pro.length === 0 ? (
            <div className="container justify-content-center align-items-center">
              <div className="justify-content-center align-items-center text-center">
                <h1>Your Cart</h1>
                <p className="mt-4">Your Cart is currently empty</p>
                <button className="continue-btn">CONTINUE SHOPING</button>
              </div>
            </div>
          ) : cartData.length > 0 ? (
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
                  {pro[0].map((product, index) => (
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
                        <td>{product.Price} PKR</td>
                        <td>
                          {cartData[0][0]?.products.map((x) => {
                            return x.productID == product._id ? (
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <button
                                  className="quantity-btn"
                                  id="incremental-btn"
                                  onClick={(e) => {
                                    decremental(x.quantity, x.productID);
                                  }}
                                >
                                  -
                                </button>
                                <p className="product-quantity">{x.quantity}</p>
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
                  ))}
                </tbody>
              </table>

              <div className="container d-flex flex-column justify-content-center align-items-center">
                <button className="continue-btn complete-btn">CHECK OUT</button>
                <button className="continue-btn complete-btn">
                  CONTINUE SHOPING
                </button>
                <button className="continue-btn complete-btn">HOME</button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
};
export default Cart;
