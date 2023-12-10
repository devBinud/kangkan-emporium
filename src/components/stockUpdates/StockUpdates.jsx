import React from "react";
import Footer from "../footer/Footer";

const StockUpdates = () => {
  return (
    <>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Stock Updates</h4>
              <p class="card-description">
                    See full list by clicking <code>Action column</code>
                  </p>
              <div class="table-responsive pt-3">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product Category</th>
                          <th>Total Products</th>
                          <th>Amount</th>
                          <th>Deadline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Herman Beck</td>
                          <td>
                            <div class="progress">
                              <div
                                class="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "25%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td>$ 77.99</td>
                          <td>May 15, 2015</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Messsy Adam</td>
                          <td>
                            <div class="progress">
                              <div
                                class="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td>$245.30</td>
                          <td>July 1, 2015</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>John Richards</td>
                          <td>
                            <div class="progress">
                              <div
                                class="progress-bar bg-warning"
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td>$138.00</td>
                          <td>Apr 12, 2015</td>
                        </tr>
                      </tbody>
                    </table>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- content-wrapper ends --> */}
        {/* <!-- partial:../../partials/_footer.html --> */}
        <Footer />
        {/* <!-- partial --> */}
      </div>
    </>
  );
};

export default StockUpdates;
