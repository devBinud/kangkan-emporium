import React from 'react'
import Footer from '../footer/Footer';

const AddProducts = () => {
  return (
    <>
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-4">Add New Product</h4>
                  <form class="forms-sample">
                    <div class="row">
                      <div class="col-md-4">
                        <p>Select Category</p>
                        <div class="form-group row">
                          <div class="col-md-12">
                            <select class="form-control">
                              <option>Mekhela Sador</option>
                              <option>Gamusa</option>
                              <option>Single Sador</option>
                              <option>Uka Set</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <p>
                          Listing on Top Products{" "}
                          <span className="text-danger">
                            <small>(0-10)</small>
                          </span>{" "}
                        </p>
                        <div class="form-group row">
                          <div class="col-md-12">
                            <select class="form-control">
                              <option>Rate Now</option>
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <p>
                          Listing on Featured Products{" "}
                          <span className="text-danger">
                            <small>(0-10)</small>
                          </span>{" "}
                        </p>
                        <div class="form-group row">
                          <div class="col-md-12">
                            <select class="form-control">
                              <option>Rate Now</option>
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div class="form-group">
                          <label for="exampleInputUsername1">
                            Enter Product Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputUsername1"
                            placeholder="Enter Product Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div class="form-group">
                          <label>
                            {" "}
                            Thumbnail Image{" "}
                            <span className="text-danger">
                              <small>(Req Size : 500px x 500px)</small>
                            </span>
                          </label>
                          <input
                            type="file"
                            name="img"
                            class="file-upload-default"
                          />
                          <div class="input-group col-xs-12">
                            <input
                              type="text"
                              class="form-control file-upload-info"
                              placeholder="Upload Image"
                            />
                            <span class="input-group-append">
                              <button
                                class="file-upload-browse btn btn-primary"
                                type="button"
                              >
                                Upload
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div class="form-group">
                          <label>
                            {" "}
                            Product Image 1{" "}
                            <span className="text-danger">
                              <small>(Req Size : 500px x 500px)</small>
                            </span>
                          </label>
                          <input
                            type="file"
                            name="img"
                            class="file-upload-default"
                          />
                          <div class="input-group col-xs-12">
                            <input
                              type="text"
                              class="form-control file-upload-info"
                              placeholder="Upload Image"
                            />
                            <span class="input-group-append">
                              <button
                                class="file-upload-browse btn btn-primary"
                                type="button"
                              >
                                Upload
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div class="form-group">
                          <label>
                            {" "}
                            Product Image 2{" "}
                            <span className="text-danger">
                              <small>(Req Size : 500px x 500px)</small>
                            </span>
                          </label>
                          <input
                            type="file"
                            name="img"
                            class="file-upload-default"
                          />
                          <div class="input-group col-xs-12">
                            <input
                              type="text"
                              class="form-control file-upload-info"
                              placeholder="Upload Image"
                            />
                            <span class="input-group-append">
                              <button
                                class="file-upload-browse btn btn-primary"
                                type="button"
                              >
                                Upload
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div class="form-group">
                          <label>
                            {" "}
                            Product Image 3{" "}
                            <span className="text-danger">
                              <small>(Req Size : 500px x 500px)</small>
                            </span>
                          </label>
                          <input
                            type="file"
                            name="img"
                            class="file-upload-default"
                          />
                          <div class="input-group col-xs-12">
                            <input
                              type="text"
                              class="form-control file-upload-info"
                              placeholder="Upload Image"
                            />
                            <span class="input-group-append">
                              <button
                                class="file-upload-browse btn btn-primary"
                                type="button"
                              >
                                Upload
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputUsername1">
                            Regular Product Price ( ₹ )
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputUsername1"
                            placeholder="Enter Regular Price"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputUsername1">
                            Add Discount (%)
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputUsername1"
                            placeholder="Add Discount"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputUsername1">
                            Sale Price ( ₹ )
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputUsername1"
                            placeholder=""
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div class="form-group">
                          <label for="exampleTextarea1">
                            Write Description (CK Editor)
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleTextarea1"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <button type="submit" class="btn btn-primary mr-2">
                      Publish Package
                    </button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
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
}

export default AddProducts
