import React from "react";
import icon from "./Images/icon.png";
export default function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div id="footer-heading" className ="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div id="social_media_icons">
          <a href="" className="me-4 text-reset">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </section>
      <div id="footer-container" className="container-fluid text-center">
        <div id="row" className="row">
          <div id="col-1" className="col-md-3">
            <h6 className="text-uppercase fw-bold mb-4"><img src = {icon}/>SPARROWBIA</h6>
            <p>
              Brand that inspired by the tastes of the modern street style. We
              aim to empower people to be confident and reflect it through their
              style.
            </p>
          </div>
          <div id="col-2" className="col-md-1">
            <h6 className="text-uppercase fw-bold mb-4">Information</h6>
            <p>
              <a href="#!" className="text-reset">
                About Us
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Contact Us
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Blogs
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Style Guide
              </a>
            </p>
          </div>
          <div id="col-3" className="col-md-2">
            <h6 className="text-uppercase fw-bold mb-4">Policies</h6>
            <p>
              <a href="#!" className="text-reset">
                Return & Exchange Policies
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                FAQS
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Our Partners
              </a>
            </p>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase fw-bold mb-4">Contacts</h6>
            <p>
              <i className="fa fa-home" aria-hidden="true"></i> &nbsp; &nbsp; New
              York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              &nbsp; &nbsp; khadijaasif288@gmail.com
            </p>
            <p>
              <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; &nbsp;&nbsp;
              + 92 336 4370 779
            </p>
          </div>
        </div>
      </div>
      <div id="footer-bottom" className="text-center p-3">
        © SPARROWBIA BY HKB RETAIL (SMC-Pvt) Limited 2022 (Previously known as
        Ahead Brands).
      </div>
    </footer>
  );
}
