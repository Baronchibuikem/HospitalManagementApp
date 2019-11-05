import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from "mdbreact";

const BlogPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Recent posts
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="map" className="pr-2" />
                Adventure
              </h6>
            </a>
            <h4 className="font-weight-bold mb-3">
              <strong>Title of the news</strong>
            </h4>
            <p>
              by{" "}
              <a href="#!" className="font-weight-bold">
                Billy Forester
              </a>
              , 15/07/2018
            </p>
            <p className="dark-grey-text">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus
              voluptas.
            </p>
            <MDBBtn color="pink" rounded size="md">
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a href="#!" className="deep-orange-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="graduation-cap" className="pr-2" />
                Education
              </h6>
            </a>
            <h4 className="font-weight-bold mb-3">
              <strong>Title of the news</strong>
            </h4>
            <p>
              by{" "}
              <a href="#!" className="font-weight-bold">
                Billy Forester
              </a>
              , 13/07/2018
            </p>
            <p className="dark-grey-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis voluptatum deleniti atque corrupti quos dolores.
            </p>
            <MDBBtn color="deep-orange" rounded size="md">
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a href="#!" className="blue-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="fire" className="pr-2" />
                Culture
              </h6>
            </a>
            <h4 className="font-weight-bold mb-3">
              <strong>Title of the news</strong>
            </h4>
            <p>
              by{" "}
              <a href="#!" className="font-weight-bold">
                Billy Forester
              </a>
              , 11/07/2018
            </p>
            <p className="dark-grey-text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
            <MDBBtn color="info" rounded size="md">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default BlogPage;
