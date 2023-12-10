import React from 'react';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div>
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="ml-3 mt-2 text-secondary">Masters</li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#category"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">Category</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="category">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="/add-category">
                    Add Category
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/all-categories">
                    All Categories
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#products"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">Products</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="products">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="/add-product">
                    Add Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/all-products">
                    All Products
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="ml-3 text-secondary mt-2">
            <i className="fa-solid fa-eye"></i> Other Pages
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Orders</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#sliders"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">Home Sliders</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="sliders">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Add Sliders
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    All Sliders
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Popups</span>
            </a>
          </li>

          {/* <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#shippingCharges"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">Shipping Charges</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="shippingCharges">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Add Review
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    View All Reviews
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Published Reviews
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Pending Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </li> */}
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#customerReview"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">Customer Review</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="customerReview">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Add Review
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    View All Reviews
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Published Reviews
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Pending Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/stock-updates">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Stock Updates</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#liveStreaming"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">Live Streaming</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="liveStreaming">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Create Streaming
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Push Notifications
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Streaming Records
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar
