import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchdepartment } from "../../store/actions/dasboard";
import PropTypes from "prop-types";

class Department extends Component {
  static propTypes = {
    department: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchdepartment();
  }
  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-responsive">
          <thead>
            <tr className="text-uppercase">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Staff Strength</th>
              <th scope="col">Head Of Department</th>
              <th scope="col">Income Generated</th>
              <th scope="col">Expenses</th>
              <th scope="col">Duration</th>
              <th scope="col">Function</th>
            </tr>
          </thead>
          {this.props.department.map(department => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{department.id}</th>
                  <td>{department.Name}</td>
                  <td>{department.Staff_strength}</td>
                  <td>{department.Head_of_department}</td>
                  <td>{department.Income_generated}</td>
                  <td>{department.Expenses}</td>
                  <td>{department.Duration}</td>
                  <td>{department.Function}</td>
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
  department: state.dashboard.department
});

export default connect(
  mapStateToProps,
  { fetchdepartment }
)(Department);
