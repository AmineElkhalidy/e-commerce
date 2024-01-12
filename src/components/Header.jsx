import React from "react";

// Routing
import { NavLink, Link } from "react-router-dom";

// Icons
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3 px-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over 100$ & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+1280 2535 3535">
                  (1) 280 2535 3535
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3 px-1">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1 className="">
                <Link to="/" className="text-white">
                  Shoppy
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Search Product"
                  aria-label="Search Product"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div className="">
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare
                      <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite
                      <br />
                      Wishlist
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/user.svg" alt="user" />
                    <p className="mb-0">Login</p>
                  </Link>
                </div>
                <div className="">
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3 px-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/images/menu.svg" alt="menu" />
                    <span className="d-inline-block me-5">Shop Categories</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-links">
                  <ul className="d-flex align-items-center gap-15 mb-0">
                    <NavLink to="/" className="header-link">
                      Home
                    </NavLink>

                    <NavLink to="/store" className="header-link">
                      Our Store
                    </NavLink>

                    <NavLink to="/" className="header-link">
                      Blogs
                    </NavLink>

                    <NavLink to="/contact" className="header-link">
                      Contact
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
