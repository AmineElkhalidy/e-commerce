import React from "react";

// Routing
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5 px-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="images/main-banner-1.jpg"
                  alt="main banner"
                />

                <div className="main-banner-content position-absolute">
                  <h4 className="">Supercharged for pros</h4>
                  <h5 className="">iPad S13+ Pro</h5>
                  <p className="">
                    From $999.00 or $41.62/mo.
                    <br />
                    for 24mo. Footnote*
                  </p>
                  <Link className="button" to="">
                    BUY NOW
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-01.jpg"
                    alt="main banner"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4 className="">Best Sell</h4>
                    <h5 className="">Laptop Max</h5>
                    <p className="">From $1690.00 or $64.62/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-03.jpg"
                    alt="main banner"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4 className="">New Arrival</h4>
                    <h5 className="">Buy iPad Air</h5>
                    <p className="">
                      From $599 or <br /> $41.91/mo for 12mo.*
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-02.jpg"
                    alt="main banner"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4 className="">15% Off</h4>
                    <h5 className="">Smartwatch 7</h5>
                    <p className="">
                      Shop the latest brand <br />
                      styles and colors.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="images/catbanner-04.jpg"
                    alt="main banner"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4 className="">Free Engraving</h4>
                    <h5 className="">Airpods Max</h5>
                    <p className="">
                      High fidelity playback & <br />
                      ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5 px-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="service icon" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="service icon" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="service icon" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="service icon" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="service icon" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">A00% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5 px-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphones" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="tv" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphones" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
