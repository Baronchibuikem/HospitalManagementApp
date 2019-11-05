import React, { Component } from "react";
import { MDBIcon, MDBBtn, MDBContainer } from "mdbreact";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import axios from "axios";

class ContactPage extends Component {
  onSubmit(formValues) {
    return axios.post(
      "http://purityhospital.herokuapp.com/dashboard/message/",
      formValues
    );
  }
  render() {
    if (this.props.submitSucceeded) {
      return <Redirect to="/appointmentsuccess" />;
    }
    return (
      <div className="container">
        <section className="contact-section my-5 py-5 border shadow">
          <div className="row">
            <div className="col-md-12">
              <form
                className="text-center mx-auto px-3 border-light"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
              >
                <h3 className="mt-4">
                  <MDBIcon icon="envelope" className="pr-2" />
                  Write to us:
                </h3>
                <div className="row mb-5">
                  <div className="col">
                    <Field
                      className="form-control w-100"
                      placeholder="Your Name"
                      name="Name"
                      component="input"
                    />
                  </div>

                  <div className="col">
                    <Field
                      className="form-control"
                      placeholder="Your Email"
                      name="Email"
                      component="input"
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col ">
                    <Field
                      className="form-control"
                      placeholder="Your Phhone Number"
                      name="Phone_number"
                      component="input"
                    />
                  </div>
                  <div className="col">
                    <Field
                      className="form-control"
                      placeholder="Your Address"
                      name="Address"
                      component="input"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Field
                      className="form-control"
                      placeholder="Message"
                      name="Message"
                      component="textarea"
                    />
                    {/* <MDBBtn rounded color="blue">
                      <MDBIcon icon="paper-plane" />
                    </MDBBtn> */}

                    <button
                      className="btn btn-info my-4 btn-block"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default reduxForm({
  form: "Contact"
})(ContactPage);
