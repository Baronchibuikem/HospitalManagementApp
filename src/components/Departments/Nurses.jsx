import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchnurses } from "../../store/actions/departments";
import PropTypes from "prop-types";

class Nurses extends Component {
  static propTypes = {
    nurses: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchnurses();
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
          {this.props.nurses.map(nurse => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{nurse.id}</th>
                  <td>{nurse.first_name}</td>
                  <td>{nurse.last_name}</td>
                  <td>{nurse.email}</td>
                  <td>{nurse.phone_number}</td>
                  <td>{nurse.emergency_contact}</td>
                  <td>{nurse.position}</td>
                  <td>{nurse.joined}</td>
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
  nurses: state.departments.nurses
});

export default connect(
  mapStateToProps,
  { fetchnurses }
)(Nurses);
