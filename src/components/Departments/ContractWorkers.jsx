import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchcontractworkers } from "../../store/actions/departments";
import PropTypes from "prop-types";

class ContractWorkers extends Component {
  static propTypes = {
    contractworkers: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchcontractworkers();
  }
  render() {
    return (
      <div class="container">
        <table className="table table-bordered">
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
          {this.props.contractworkers.map(contractworker => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{contractworker.id}</th>
                  <td>{contractworker.first_name}</td>
                  <td>{contractworker.last_name}</td>
                  <td>{contractworker.email}</td>
                  <td>{contractworker.phone_number}</td>
                  <td>{contractworker.emergency_contact}</td>
                  <td>{contractworker.position}</td>
                  <td>{contractworker.joined}</td>
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
  contractworkers: state.departments.contractworkers
});

export default connect(
  mapStateToProps,
  { fetchcontractworkers }
)(ContractWorkers);
