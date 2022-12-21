import { useDispatch, useSelector } from "react-redux";
import { getCart, fetchProductsbyIDS } from "../actions/posts";
import { useEffect , useState } from "react";
import Product from "../Component/Product";
const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const mail = useSelector((state) => state.posts);
  const products = useSelector((state) => state.products);
  const getCartDispatch = useDispatch();
  const getProductsById = useDispatch();
  useEffect(() => {
    if (mail.length > 0) {
      console.log("check: ", mail[0][0].Email);
      getCartDispatch(getCart(mail[0][0].Email));
    } else {
      alert("First Login to view Carts product");
    }
  }, []);
  useEffect(() => {
    if (cartData.length > 0) {
      const y = cartData[0][0].products.map((x) => {
        return x.productID;
      });

      const quantity = cartData[0][0].products.map((x) => {
        return x.quantity;
      });
      console.log("Quantity: ", quantity);
      console.log("cart: ", cartData[0][0].products);
      console.log("Map function check: ", y);
      getProductsById(fetchProductsbyIDS(y));
    }
  }, [cartData]);
  console.log("Products: ", products);
  const [productQuantity, setQuantity] = useState(0);
  function setProductQuantity(value){
    console.log(value)
  }
  return (
    <main>
      <div>
        <div className="small-container cart-page">
          {products.length === 0 ? (
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
                  {products[0].map((product, index) => (
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
                          <div style={{display:"flex", flexDirection:"row"}}>
                            <button
                              className=  "quantity-btn"
                            >
                              -
                            </button>
                            {cartData[0][0].products.map((x) => {
                              return x.productID == product._id ? (
                                <p className="product-quantity">{x.quantity}</p>
                              ) : (
                                <p></p>
                              );
                            })}

                            <button
                              className="quantity-btn"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          <i
                            className="fa fa-remove remove-product"
                          ></i>
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
