import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdbreact";
import img1 from "../../assets/test1.jpg";
import img2 from "../../assets/test2.jpg";
import img3 from "../../assets/test3.jpg";

const TestimonialsMultiPage = () => {
  return (
    <MDBContainer>
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5 text-uppercase">
          Testimonials
        </h2>
        <MDBCarousel
          activeItem={1}
          length={3}
          slide={true}
          //   showControls={true}
          multiItem
          testimonial
        >
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem itemId="1">
                <MDBCol md="12">
                  <img
                    src={img1}
                    alt=""
                    className="rounded-circle img-fluid img-thumbnail"
                    style={{ maxWidth: "25%" }}
                  />
                  <h4 className="font-weight-bold mt-4">Anna Deynah</h4>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    Purity hospital has been a revelation to me, can't count how
                    many times this organization has come to my rescue. They are
                    the best
                  </p>
                </MDBCol>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBCol md="12">
                  <img
                    src={img2}
                    alt=""
                    className="rounded-circle img-fluid"
                    style={{ maxWidth: "25%" }}
                  />
                  <h4 className="font-weight-bold mt-4">Douglas David</h4>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    Their flexible payment structure is out of this world
                    compared to the kind of excellent service they provide
                  </p>
                </MDBCol>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBCol md="12">
                  <img
                    src={img3}
                    alt=""
                    className="rounded-circle img-fluid"
                    style={{ maxWidth: "25%" }}
                  />
                  <h4 className="font-weight-bold mt-4">Shane wayne</h4>
                  <p className="font-weight-normal">
                    <MDBIcon icon="quote-left" className="pr-2" />
                    Simply the best and their staff are so hospitable and know
                    their stuff very well, was really impressed with their value
                    for human life
                  </p>
                </MDBCol>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
  );
};

export default TestimonialsMultiPage;
