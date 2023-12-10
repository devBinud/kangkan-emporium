import React from 'react';
import Footer from '../footer/Footer';
import dash__img from "../../assets/background/dashboard-bg.png";

const Main = () => {
  return (
    <>
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="row">
                <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 className="font-weight-bold">
                    Welcome to{" "}
                    <span style={{ color: "#3498DB " }}>KANGKAN</span>
                    <span style={{ color: "#FF6347" }}> EMPORIUM</span>
                  </h3>
                  <h6 className="font-weight-normal mb-0">
                    Kangkan Emporium Admin Dashboard : {""}
                    <span className="text-primary">
                      Effortlessly manage sales and inventory with our command
                      center.
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-people mt-auto">
                  <img
                    src={dash__img}
                    className='img-fluid'
                    alt="dashboard-background"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin transparent">
              <div className="row">
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <div className="card card-tale">
                    <div className="card-body">
                      <p className="mb-4">Today’s Visitors</p>
                      <p className="fs-30 mb-2">100</p>
                      <p>Calculation for 24 hrs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <div className="card card-dark-blue">
                    <div className="card-body">
                      <p className="mb-4">Total Products</p>
                      <p className="fs-30 mb-2">544</p>
                      <p>Last updated on 10 December</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                  <div className="card card-light-blue">
                    <div className="card-body">
                      <p className="mb-4">Todays Orders</p>
                      <p className="fs-30 mb-2">120</p>
                      <p>Last updated on 10 December</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 stretch-card transparent">
                  <div className="card card-light-danger">
                    <div className="card-body">
                      <p className="mb-4">App Downloaded</p>
                      <p className="fs-30 mb-2">222</p>
                      <p>Data as per recent calculation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
        {/* partial:partials/_footer.html */}
        <Footer/>
      </div>
    </>
  );
}

export default Main
