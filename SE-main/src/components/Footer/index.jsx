import logo from '../../assets/logo.png'

const Footer = () => (
  <footer className='text-center text-lg-start bg-light text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>
      <div id='social_media_icons'>
        <a className='me-4 text-reset'>
          <i className='fa fa-facebook' aria-hidden='true'></i>
        </a>
        <a className='me-4 text-reset'>
          <i className='fa fa-twitter' aria-hidden='true'></i>
        </a>
        <a className='me-4 text-reset'>
          <i className='fa fa-instagram' aria-hidden='true'></i>
        </a>
      </div>
    </section>
    <section>
      <div className='container text-center text-md-start mt-5'>
        <div className='row mt-3'>
          <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <img src={logo} style={{ width: '30px' }} />
              SPARROWBIA
            </h6>
            <p>
              Brand that inspired by the tastes of the modern street style. We aim to empower people
              to be confident and reflect it through their style.
            </p>
          </div>
          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4' id='footer-links'>
            <h6 className='text-uppercase fw-bold mb-4'>Information</h6>
            <p>
              <a className='text-reset'>
                About Us
              </a>
            </p>
            <p>
              <a className='text-reset'>
                Contact Us
              </a>
            </p>
            <p>
              <a className='text-reset'>
                Blogs
              </a>
            </p>
            <p>
              <a className='text-reset'>
                Style Guide
              </a>
            </p>
          </div>
          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4' id='footer-links'>
            <h6 className='text-uppercase fw-bold mb-4'>Policies</h6>
            <p>
              <a className='text-reset'>
                Return & Exchange Policies
              </a>
            </p>
            <p>
              <a className='text-reset'>
                Privacy Policy
              </a>
            </p>
            <p>
              <a className='text-reset'>
                FAQS
              </a>
            </p>
            <p>
              <a className='text-reset'>
                Our Partners
              </a>
            </p>
          </div>
          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <i className='fa fa-home' aria-hidden='true'></i> &nbsp; &nbsp; New York, NY 10012, US
            </p>
            <p>
              <i className='fa fa-envelope-o' aria-hidden='true'></i>
              &nbsp; &nbsp; khadijaasif288@gmail.com
            </p>
            <p>
              <i className='fa fa-phone' aria-hidden='true'></i>&nbsp; &nbsp;&nbsp; + 92 336 4370
              779
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className='text-center p-4 bottom-footer'>
      © SPARROWBIA BY HKB RETAIL (SMC-Pvt) Limited 2022 (Previously known as Ahead Brands).
    </div>
  </footer>
)

export default Footer
