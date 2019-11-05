import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { Redirect } from "react-router-dom";

class PatientRegForm extends Component {
  renderInput({ input }) {
    return <input {...input} />;
  }
  renderTextarea({ ...textarea }) {
    return <textarea {...textarea} />;
  }

  onSubmit(formValues) {
    return axios.post(
      "http://purityhospital.herokuapp.com/patients/postpatient/",
      formValues
    );
  }

  render() {
    if (this.props.submitSucceeded) {
      return <Redirect to="/success" />;
    }
    return (
      <div className="my-5 py-5">
        <h5 className="text-center text-uppercase">
          Please register the patient with this form
        </h5>
        <hr />
        <form
          className="text-center border border-light p-5 col-8 mx-auto shadow"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <p className="mb-4">Patient Registration Portal</p>

          <div className="form-row mb-4">
            <div className="col col-sm-12">
              <Field
                className="form-control "
                placeholder="First name"
                name="first_name"
                component="input"
              />
            </div>
            <div className="col col-sm-12">
              <Field
                className="form-control"
                placeholder="Last name"
                name="last_name"
                component="input"
              />
            </div>
          </div>
          <div className="form-row mb-4">
            <div className="col col-sm-12">
              <Field
                className="form-control"
                placeholder="Location"
                name="address"
                component="input"
              />
            </div>
            <div className="col col-sm-12">
              <Field
                className="form-control"
                placeholder="Email"
                name="email"
                type="email"
                component="input"
              />
            </div>
          </div>
          <div className="form-row mb-4">
            <div className="col col-sm-12">
              <Field
                type="number"
                className="form-control"
                placeholder="Phone Number"
                name="phone_number"
                component="input"
              />
            </div>
            <div className="col col-sm-12">
              <Field
                className="form-control"
                placeholder="Next of Kin"
                name="next_of_kin"
                component="input"
              />
            </div>
            <div className="col col-sm-12">
              <Field
                className="form-control"
                placeholder="Next of Kin Phone Number"
                name="phone_number_next_of_kin"
                component="input"
              />
            </div>
          </div>

          <div className="form-group">
            <Field
              className="form-control rounded-0"
              rows="3"
              placeholder="Reason For Visiting"
              name="Message"
              component="textarea"
            />
          </div>

          <button className="btn btn-info my-4 btn-block" type="submit">
            Register
          </button>

          <hr />
        </form>
        <hr />
      </div>
    );
  }
}

// const validate = formValues => {
//   const errors = {};

//   if (!formValues.first_name) {
//     errors.first_name = "You must enter a first name";
//   }
//   if (!formValues.last_name) {
//     errors.last_name = "You must enter a last name";
//   }
//   if (!formValues.phone_number) {
//     errors.email = "You must enter a phone_number";
//   }
//   if (!formValues.address) {
//     errors.address = "You must enter a address";
//   }
//   if (!formValues.next_of_kin) {
//     errors.next_of_kin = "You must enter a next_of_kin";
//   }
//   if (!formValues.message) {
//     errors.message = "You must enter a message";
//   }
//   if (!formValues.phone_number_next_of_kin) {
//     errors.phone_number_next_of_kin =
//       "You must enter a phone_number_next_of_kin";
//   }
//   return errors;
// };

export default reduxForm({
  form: "PatientRegistration"
})(PatientRegForm);
