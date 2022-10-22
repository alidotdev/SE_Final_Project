import { Footer, Header } from '../../components'

import './styles.css'

import Picture1 from '../../assets/images/Picture1.jpg'
import Picture from '../../assets/images/Picture.jpg'

const Cart = () => (
  <main>
    <Header />
    <div>
      <div className='small-container cart-page'>
        <table class='table table-borderless'>
          <thead className='table-header'>
            <tr>
              <th scope='col'>Products</th>
              <th scope='col'>Price</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Total</th>
            </tr>
          </thead>
          <tbody>
            <div className='separator' />
            <tr>
              <td scope='row'>
                <div className='cart-info'>
                  <img src={Picture} />
                  <div>
                    <p>Ochre Shirt For Men</p>
                    <small>Price: $90.00</small>
                    <br />
                    <small>Size: Medium</small>
                  </div>
                </div>
              </td>
              <td>$50.00</td>
              <td>
                <input type='number' onChange={() => null} value='1' />
              </td>
              <td>$50.00</td>
            </tr>
            <div className='separator' />
            <tr>
              <td scope='row'>
                <div className='cart-info'>
                  <img src={Picture1} />
                  <div>
                    <p>Ochre Shirt For Men</p>
                    <small>Price: $90.00</small>
                    <br />
                    <small>Size: Medium</small>
                  </div>
                </div>
              </td>
              <td>$90.00</td>
              <td>
                <input type='number' onChange={() => null} value='1' />
              </td>
              <td>$90.00</td>
            </tr>
            <div className='separator' />
          </tbody>
        </table>
        <div className='totalprice'>
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>$140</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>$10</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>$150</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer />
  </main>
)

export default Cart
