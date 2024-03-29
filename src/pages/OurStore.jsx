import React from "react";

// Components
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const OurStore = () => {
  return (
    <>
      <Meta title="Our Store" />

      <div>
        <BreadCrumb title="Our Store" />

        <div className="store-wrapper py-5 px-1 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop by Categories</h3>
                </div>

                <div className="filter-card mb-3">
                  <h3 className="filter-title">Filter By</h3>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product Tags</h3>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Random Product</h3>
                </div>
              </div>
              <div className="col-9"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
