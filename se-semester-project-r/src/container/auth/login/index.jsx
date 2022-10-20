import './styles.css'

import logo from '../../../assets/logo.png'

const Login = () => {
  return (
    <>
        <div className='navbar' id='header'>
          <marquee>
            Free shipping on orders above Rs.2000 within Pakistan and shipping rate of 99 PKR on
            every local orders.
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
      <div className='body-container' >
        <div className='center'>
          <h1>Login Form</h1>
          <form method='post'>
            <div className='txt_field'>
              <input type='text' required />
              <span></span>
              <label>Username</label>
            </div>
            <div className='txt_field'>
              <input type='password' required />
              <span></span>
              <label>Password</label>
            </div>
            <div className='pass'>Forgot Password?</div>
            <input type='submit' value='Login' />
            <div className='signup_link'>
              Not a member? <a href='#'>Signup</a>
            </div>
          </form>
        </div>
      </div>
      <footer className='text-center text-lg-start bg-light text-muted'>
        {/*  Section: Social media */}
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          {/*  Left */}
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>
          {/*  Left */}

          {/*  Right */}
          <div id='social_media_icons'>
            <a href='' className='me-4 text-reset'>
              <i className='fa fa-facebook' aria-hidden='true'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fa fa-twitter' aria-hidden='true'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fa fa-instagram' aria-hidden='true'></i>
            </a>
          </div>
          {/*  Right */}
        </section>
        {/*  Section: Social media */}

        {/*  Section: Links  */}
        <section>
          <div className='container text-center text-md-start mt-5'>
            {/*  Grid row */}
            <div className='row mt-3'>
              {/*  Grid column */}
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                {/*  Content */}
                <h6 className='text-uppercase fw-bold mb-4'>
                  <img src={logo} style={{ width: '30px' }} />
                  SPARROWBIA
                </h6>
                <p>
                  Brand that inspired by the tastes of the modern street style. We aim to empower
                  people to be confident and reflect it through their style.
                </p>
              </div>
              {/*  Grid column */}

              {/*  Grid column */}
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4' id='footer-links'>
                {/*  Links */}
                <h6 className='text-uppercase fw-bold mb-4'>Information</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    About Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Blogs
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Style Guide
                  </a>
                </p>
              </div>
              {/*  Grid column */}

              {/*  Grid column */}
              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4' id='footer-links'>
                {/*  Links */}
                <h6 className='text-uppercase fw-bold mb-4'>Policies</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Return & Exchange Policies
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    FAQS
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Our Partners
                  </a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                {/* Links */}
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <i className='fa fa-home' aria-hidden='true'></i> &nbsp; &nbsp; New York, NY
                  10012, US
                </p>
                <p>
                  <i className='fa fa-envelope-o' aria-hidden='true'></i>
                  &nbsp; &nbsp; khadijaasif288@gmail.com
                </p>
                <p>
                  <i className='fa fa-phone' aria-hidden='true'></i>&nbsp; &nbsp;&nbsp; + 92 336
                  4370 779
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <div className='text-center p-4 bottom-footer'>
          © SPARROWBIA BY HKB RETAIL (SMC-Pvt) Limited 2022 (Previously known as Ahead Brands).
        </div>
        {/* Copyright */}
      </footer>
    </>
  )
}

export default Login
