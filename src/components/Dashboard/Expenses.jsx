import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchexpense } from "../../store/actions/dasboard";
import PropTypes from "prop-types";

class Expense extends Component {
  static propTypes = {
    expense: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchexpense();
  }
  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-responsive">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Department</th>
              <th scope="col">Requested By</th>
              <th scope="col">Position</th>
              <th scope="col">Amount</th>
              <th scope="col">Reason</th>
              <th scope="col">Approved</th>
              <th scope="col">Approved_by</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          {this.props.expense.map(expense => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{expense.id}</th>
                  <td>{expense.Department}</td>
                  <td>{expense.Requested_by}</td>
                  <td>{expense.Position}</td>
                  <td>{expense.Amount}</td>
                  <td>{expense.Reason}</td>
                  <td>{expense.Approved}</td>
                  <td>{expense.Approved_by}</td>
                  <td>{expense.Date}</td>
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
  expense: state.dashboard.expense
});

export default connect(
  mapStateToProps,
  { fetchexpense }
)(Expense);
