import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchpayroll } from "../../store/actions/dasboard";
import PropTypes from "prop-types";

class Payroll extends Component {
  static propTypes = {
    payroll: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchpayroll();
  }
  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-responsive ft">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Salary</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          {this.props.payroll.map(payroll => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{payroll.id}</th>
                  <td>{payroll.Name}</td>
                  <td>{payroll.Department}</td>
                  <td>{payroll.Salary}</td>
                  <td>{payroll.Position}</td>
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
  payroll: state.dashboard.payroll
});

export default connect(
  mapStateToProps,
  { fetchpayroll }
)(Payroll);
