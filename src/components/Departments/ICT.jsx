import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchict } from "../../store/actions/departments";
import PropTypes from "prop-types";

class ICT extends Component {
  static propTypes = {
    ict: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchict();
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
          {this.props.ict.map(ict => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{ict.id}</th>
                  <td>{ict.first_name}</td>
                  <td>{ict.last_name}</td>
                  <td>{ict.email}</td>
                  <td>{ict.phone_number}</td>
                  <td>{ict.emergency_contact}</td>
                  <td>{ict.position}</td>
                  <td>{ict.joined}</td>
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
  ict: state.departments.ict
});

export default connect(
  mapStateToProps,
  { fetchict }
)(ICT);
