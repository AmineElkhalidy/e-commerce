import React from "react";

// Routing
import { Link } from "react-router-dom";

// Icons
import {
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4 px-1">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-10 align-items-center">
                <img src="images/newsletter.png" alt="Newsletter" />
                <h2 className="mb-0 text-white">Subscribe to our Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4 px-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="">
                <address className="text-white fs-6">
                  Hno: 277 Near Vill chopal,
                  <br /> Nowhere, Haryana <br />
                  PinCode: 131103
                </address>

                <a
                  href="tel:+128025353535"
                  className="mt-3 d-block mb-1 footer-link"
                >
                  (+1) 280 2535 3535
                </a>

                <a
                  href="mailto:shoppy@contact.com"
                  className="mt-2 d-block mb-0 footer-link"
                >
                  shoppy@contact.com
                </a>

                <div className="social__icons d-flex align-items-center gap-30 mt-4">
                  <a href="http://facebook.com" target="_blank">
                    <BsFacebook className="footer-link fs-4" />
                  </a>
                  <a href="http://instagram.com" target="_blank">
                    <BsInstagram className="footer-link fs-4" />
                  </a>
                  <a href="http://pinterest.com" target="_blank">
                    <BsPinterest className="footer-link fs-4" />
                  </a>
                  <a href="http://linkedin.com" target="_blank">
                    <BsLinkedin className="footer-link fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="footer-link py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="" className="footer-link py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="" className="footer-link py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="" className="footer-link py-2 mb-1">
                  Terms Of Services
                </Link>
                <Link to="" className="footer-link py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="footer-link py-2 mb-1">
                  About Us
                </Link>
                <Link to="" className="footer-link py-2 mb-1">
                  Faq
                </Link>
                <Link to="" className="footer-link py-2 mb-1">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="footer-link py-2 mb-1">
                  Accessories
                </Link>
                <Link to="" className="footer-link py-2 mb-1">
                  Laptops
                </Link>
                <Link to="" className="footer-link py-2 mb-1">
                  Headphones
                </Link>
                <Link to="" className="footer-link py-2 mb-1">
                  Tablets
                </Link>
                <Link to="" className="footer-link py-2 mb-1">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4 px-1">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()} Powered by Shoppy
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
