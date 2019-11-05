import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/author.jpg";
import cto from "../../assets/cto.jpg";

const TeamPage = () => {
  return (
    <MDBContainer>
      <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            OUR AMAZING TEAM
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            We pride ourselves in the fact that all our personnels are
            professionals in their respective fields and uphold the best
            practices in the health industry.
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src={img1}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Micheal Jason</h5>
              <p className="text-uppercase blue-text">NeuroSurgeon</p>
              <p>Chief Surgeon</p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={img2}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Dr John Doe</h5>
              <p className="text-uppercase blue-text">Surgeon</p>
              <p className="grey-text">Vp Emergency Reponse Team</p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={img3}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Sandra Smith</h5>
              <p className="text-uppercase blue-text">Marketing Exective</p>
              <p className="grey-text">Chief Marketing Officer</p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={cto}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
              <p className="text-uppercase blue-text">Software Engineer</p>
              <p className="grey-text">Chief Technology Officer</p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default TeamPage;
