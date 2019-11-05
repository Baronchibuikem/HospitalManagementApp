import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import "./OurServices.css";

const OurServices = () => {
  return (
    <section className="pt-5 setbg text-white">
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-center my-5 text-uppercase">
          Our Services
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          We provide you with the best health care services you deserve while
          ensuring all our services remain affordable and standardized
        </p>

        <MDBRow>
          <MDBCol md="4" className="md-0 mb-5">
            <h4 className="font-weight-bold text-uppercase">Surgery</h4>
            <p className="grey-text">
              We have seasoned surgeons who are well vast both in experience and
              knowledge of modern procedures. We have successfully recorded a
              100% success in all our procedures.
            </p>
            <MDBBtn color="success" size="sm">
              Learn more
            </MDBBtn>
          </MDBCol>
          <MDBCol md="4" className="md-0 mb-5">
            <h4 className="font-weight-bold text-uppercase">Consultation</h4>
            <p className="grey-text">
              We offer consultation services that cuts across Traditional
              healthcare to technology powered health services. Our solutions
              have over the years become a benchmark for others
            </p>
            <MDBBtn color="success" size="sm">
              Learn more
            </MDBBtn>
          </MDBCol>
          <MDBCol md="4" className="md-0 mb-5">
            <h4 className="font-weight-bold text-uppercase">Support</h4>
            <p className="grey-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <MDBBtn color="success" size="sm">
              Learn more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default OurServices;
