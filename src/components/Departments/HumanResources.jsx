import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchhumanresource } from "../../store/actions/departments";
import PropTypes from "prop-types";

class HumanResource extends Component {
  static propTypes = {
    humanresource: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchhumanresource();
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
          {this.props.humanresource.map(humanresource => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{humanresource.id}</th>
                  <td>{humanresource.first_name}</td>
                  <td>{humanresource.last_name}</td>
                  <td>{humanresource.email}</td>
                  <td>{humanresource.phone_number}</td>
                  <td>{humanresource.emergency_contact}</td>
                  <td>{humanresource.position}</td>
                  <td>{humanresource.joined}</td>
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
  humanresource: state.departments.humanresource
});

export default connect(
  mapStateToProps,
  { fetchhumanresource }
)(HumanResource);
