import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchdoctors } from "../../store/actions/departments";
import PropTypes from "prop-types";

class Doctors extends Component {
  static propTypes = {
    doctors: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchdoctors();
  }
  render() {
    return (
      <div clasName="container">
        <table className="table table-bordered table-responsive">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Emergency Contact</th>
              <th scope="col">Position</th>
              <th scope="col">Specialty</th>
              <th scope="col">Joined</th>
            </tr>
          </thead>
          {this.props.doctors.map(doctor => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{doctor.id}</th>
                  <td>{doctor.first_name}</td>
                  <td>{doctor.last_name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.phone_number}</td>
                  <td>{doctor.emergency_contact}</td>
                  <td>{doctor.position}</td>
                  <td>{doctor.specialty}</td>
                  <td>{doctor.joined}</td>
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
  doctors: state.departments.doctors
});

export default connect(
  mapStateToProps,
  { fetchdoctors }
)(Doctors);
