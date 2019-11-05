import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchpatients } from "../../store/actions/patients";
import PropTypes from "prop-types";

class Patient extends Component {
  static propTypes = {
    patients: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchpatients();
  }
  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-responsive">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name By</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Next Of Kin</th>
              <th scope="col">Next of kin Phone</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          {this.props.patients.map(patient => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{patient.id}</th>
                  <td>{patient.first_name}</td>
                  <td>{patient.last_name}</td>
                  <td>{patient.address}</td>
                  <td>{patient.email}</td>
                  <td>{patient.phone_number}</td>
                  <td>{patient.next_of_kin}</td>
                  <td>{patient.phone_number_next_of_kin}</td>
                  <td>{patient.message}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  patients: state.patients.patients
});

export default connect(
  mapStateToProps,
  { fetchpatients }
)(Patient);
