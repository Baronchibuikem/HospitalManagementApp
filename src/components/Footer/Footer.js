import React from "react";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section text-white">
      <div className="container">
        <div className="row footer-widget">
          <div className="col-lg-4 col-md-6 ">
            <div>
              <h5 className="fw-title">Forum</h5>
              <p>
                <Link to="blog" className="footer-link">
                  Blog
                </Link>
              </p>
              <p>Career</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 footer-widget">
            <div className="contact-widget">
              <h5 className="fw-title">CONTACT US</h5>
              <p>
                <i className="fa fa-map-marker"></i>No 12 kunuka street, Area
                11, Garki, Abuja
              </p>
              <p>
                <i className="fa fa-phone"></i>(+234) 7037541482
              </p>
              <p>
                <i className="fa fa-envelope"></i>suppor@purity.com
              </p>
              <p>
                <i className="fa fa-clock"></i>Mon - Sun, 2400hours
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6  footer-widget">
            <div className="newslatter-widget">
              <h5 className="fw-title">NEWSLETTER</h5>
              <p>
                Subscribe your email to get the latest news and new offer also
                discount
              </p>
              {/* <form className="footer-newslatter-form">
                <input type="text" placeholder="Email address" />
                <button>
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </form> */}
              <div>
                <Link to="#">
                  <MDBIcon
                    fab
                    icon="facebook-f"
                    className="text-white mx-5 mt-3"
                  />
                </Link>
                <Link to="#">
                  <MDBIcon
                    fab
                    icon="twitter"
                    className="text-white mx-5 mt-3"
                  />
                </Link>
                <Link to="#">
                  <MDBIcon
                    fab
                    icon="instagram"
                    className="text-white mx-5 mt-3"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div
          className="footer-bottom text-center"
          style={{ backGroundColor: "#eee" }}
        >
          <div className="pb-3">
            All rights reserved | This template is made with{" "}
            <i className="fa fa-heart" aria-hidden="true"></i> by AwesomeBaron
          </div>
        </div>
      </div>
    </footer>
  );
}
