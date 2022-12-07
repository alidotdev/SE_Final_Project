import { useState } from 'react'

import {footer}  from '../Component/footer'
import { useDispatch, useSelector } from 'react-redux'

import { getCart, fetchProductsbyIDS , updateCart } from '../actions/posts'

// import Picture1 from 'E:/Semester 5/SE Lab/Final Project/IDLSE/sparrowbia/src/Images/check.jpg'
// import Picture from 'E:/Semester 5/SE Lab/Final Project/IDLSE/sparrowbia/src/Images/kid.png'
// import './styles.css'
import { useEffect } from 'react'

const temp = [
  {
    productID: "01234",
    quantity: 2
  },
  {
    productID: "01234",
    quantity: 2
  },
  {
    productID: "01234",
    quantity: 2
  }
]

const Cart = () => {

 

  const user = 'ehsaan2288@gmail.com'
  

  const tempFun = () =>{
    const idArr = temp.map(item => item.id);
  }


  const [tax, setTax] = useState(0)
  const [subTotal, setsubTotal] = useState(0)
  const [products, setProducts] = useState([
    {
      id: 0,
      title: 'Ochre Shirt For Men',
      price: 90,
      Size: 'Medium',
      quantity: 1,
      total: 90,
      // image: Picture,
    },
    {
      id: 1,
      title: 'Ochre Shirt For Men',
      price: 50,
      Size: 'Medium',
      quantity: 1,
      total: 50,
      // image: Picture1,
    },
  ])

  const calculateTotalPrice = () => {
    const subTotalPrice = products.reduce((acc, product) => acc + product.total, 0)
    setsubTotal(subTotalPrice)
    setTax(0.1 * subTotalPrice)
  }

 
  useEffect(() => {
    dispatch((getCart(user)))
  }, [])
  const dispatch = useDispatch();
  const cartData = useSelector(state=>state.cart)
  console.log("cart data: ",cartData[0]);

  useEffect(() => {
    const ids = cartData[0].products
    console.log('IDS : ', ids)
    dispatch(fetchProductsbyIDS(ids))
  }, [])



  useEffect(() => {
    calculateTotalPrice()
  }, [products])

  const handleIncrement = index => {
    const tempProducts = [...products]
    tempProducts[index].quantity++
    tempProducts[index].total = tempProducts[index].quantity * tempProducts[index].price
    setProducts(tempProducts)
  }

  const handleDecrement = index => {
    const tempProducts = [...products]
    if (tempProducts[index].quantity > 0) {
      tempProducts[index].quantity--
      tempProducts[index].total = tempProducts[index].quantity * tempProducts[index].price
      setProducts(tempProducts)
    }
  }

  const removeProduct = id => {
    const filteredProducts = products.filter(item => item.id !== id)
    setProducts(filteredProducts)
  }

  return (
    <main>
      {/* <Header /> */}
      <div>
        <div className='small-container cart-page'>
          {products.length === 0 ? (
            <div className='container justify-content-center align-items-center'>
              <div className='justify-content-center align-items-center text-center'>
                <h1>You Cart</h1>
                <p className='mt-4'>Your Cart is currently empty</p>
                <button className='continue-btn'>CONTINUE SHOPING</button>
              </div>
            </div>
          ) : (
            <>
              <table class='table table-borderless'>
                <thead className='table-header'>
                  <tr>
                    <th scope='col'>Products</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Total</th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <div className='separator' />
                  {products.map((product, index) => (
                    <>
                      <tr>
                        <td scope='row'>
                          <div className='cart-info'>
                            <img className='product-img' src={product.image} />
                            <div>
                              <p>{product.title}</p>
                              <small>Price: ${product.price}</small>
                              <br />
                              <small>Size: {product.Size}</small>
                            </div>
                          </div>
                        </td>
                        <td>${product.price}</td>
                        <td>
                          <div className='row align-items-center'>
                            <button onClick={() => handleDecrement(index)} className='quantity-btn'>
                              -
                            </button>
                            <p className='product-quantity'>{product.quantity}</p>
                            <button onClick={() => handleIncrement(index)} className='quantity-btn'>
                              +
                            </button>
                          </div>
                        </td>
                        <td>${product.total}</td>
                        <td>
                          <i onClick={() => removeProduct(product.id)} className='fa fa-remove remove-product'></i>
                        </td>
                      </tr>
                      <div className='separator' />
                    </>
                  ))}
                </tbody>
              </table>
              <div className='totalprice'>
                <table>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>${subTotal}</td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td>${tax}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>${subTotal + tax}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='container d-flex flex-column justify-content-center align-items-center'>
                <button className='continue-btn complete-btn'>CHECK OUT</button>
                <button className='continue-btn complete-btn'>CONTINUE SHOPING</button>
                <button className='continue-btn complete-btn'>HOME</button>
              </div>
            </>
          )}
        </div>
      </div>
      <footer />
    </main>
  )
}
export default Cart