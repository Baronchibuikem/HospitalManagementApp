import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchstaff } from "../../store/actions/dasboard";
import PropTypes from "prop-types";

class Staff extends Component {
  static propTypes = {
    staff: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchstaff();
  }
  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-responsive">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone Nmber</th>
              <th scope="col">Email</th>
              <th scope="col">Reference</th>
              <th scope="col">Reference Number</th>
              <th scope="col">Address</th>
              <th scope="col">State</th>
              <th scope="col">Age</th>
              <th scope="col">Country</th>
              <th scope="col">Position</th>
              <th scope="col">Salary</th>
              <th scope="col">Probation</th>
              <th scope="col">Queries</th>
              <th scope="col">Department</th>
              <th scope="col">Joined</th>
              <th scope="col">Resign</th>
            </tr>
          </thead>
          {this.props.staff.map(staff => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{staff.id}</th>
                  <td>{staff.First_name}</td>
                  <td>{staff.Last_name}</td>
                  <td>{staff.Phone_number}</td>
                  <td>{staff.email}</td>
                  <td>{staff.Reference}</td>
                  <td>{staff.Reference_phone_number}</td>
                  <td>{staff.Home_address}</td>
                  <td>{staff.State}</td>
                  <td>{staff.Age}</td>
                  <td>{staff.Country}</td>
                  <td>{staff.Position}</td>
                  <td>{staff.On_probation}</td>
                  <td>{staff.Number_of_queries}</td>
                  <td>{staff.Department}</td>
                  <td>{staff.Joined}</td>
                  <td>{staff.Resigned}</td>
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
  staff: state.dashboard.staff
});

export default connect(
  mapStateToProps,
  { fetchstaff }
)(Staff);
