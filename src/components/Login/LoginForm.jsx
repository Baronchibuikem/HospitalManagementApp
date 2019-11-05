import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../store/actions/auth";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div className="my-5 py-5">
        <form
          className="text-center border border-light p-5 col-md-6 col-sm-12 mx-auto shadow"
          style={{ backgroundColor: "#eee" }}
          onSubmit={this.onSubmit}
        >
          <p className="h4 mb-4">Login</p>

          <div className="mb-4">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              onChange={this.onChange}
              value={username}
            />
          </div>

          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={this.onChange}
            value={password}
          />
          <button className="btn btn-info my-4 btn-block" type="submit">
            Login
          </button>
          <hr />
          <p>
            Don't have an
            <em> account </em>
            <Link to="/registration" className="lg">
              {" "}
              Register
            </Link>
          </p>
        </form>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
