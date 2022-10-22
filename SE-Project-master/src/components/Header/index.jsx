import logo from '../../assets/logo.png'

const Header = () => (
  <>
    <div className='navbar' id='header'>
      <marquee>
        Free shipping on orders above Rs.2000 within Pakistan and shipping rate of 99 PKR on every
        local orders.
      </marquee>
    </div>
    <div className='container-fluid' id='main-name'>
      <img src={logo} className='logo' alt='' />
      <h1>SPARROWBIA</h1>
    </div>
    <nav className='navbar navbar-expand-lg'>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav' id='menu-list'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Men
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link'
              href='#'
              id='navbarDropdown1'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Women
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown1'>
              <a className='dropdown-item' href='#'>
                Action
              </a>
              <a className='dropdown-item' href='#'>
                Another action
              </a>
              <div className='dropdown-divider'></div>
              <a className='dropdown-item' href='#'>
                Something else here
              </a>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link'
              href='#'
              id='navbarDropdown2'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Kids
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link'
              href='#'
              id='navbarDropdown3'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Other Accessories
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>
)

export default Header
