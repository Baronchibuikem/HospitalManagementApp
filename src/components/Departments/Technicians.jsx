import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchtechnicians } from "../../store/actions/departments";
import PropTypes from "prop-types";

class Technicians extends Component {
  static propTypes = {
    technicians: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchtechnicians();
  }
  render() {
    return (
      <div class="container">
        <table className="table table-bordered table-responsive">
          <thead className="bold">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Emergency Contact</th>
              <th scope="col">Position</th>
              <th scope="col">Joined</th>
            </tr>
          </thead>
          {this.props.technicians.map(technician => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{technician.id}</th>
                  <td>{technician.first_name}</td>
                  <td>{technician.last_name}</td>
                  <td>{technician.email}</td>
                  <td>{technician.phone_number}</td>
                  <td>{technician.emergency_contact}</td>
                  <td>{technician.position}</td>
                  <td>{technician.joined}</td>
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
  technicians: state.departments.technicians
});

export default connect(
  mapStateToProps,
  { fetchtechnicians }
)(Technicians);
