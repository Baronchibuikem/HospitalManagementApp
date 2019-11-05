import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../store/actions/auth";

class RegistrationForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    const { password, password2, username, email } = this.state;
    if (password !== password2) {
      alert("passwords do not match");
    } else {
      const newUser = {
        username,
        password,
        email
      };
      this.props.register(newUser);
    }
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
    const { username, email, password, password2 } = this.state;
    return (
      <div className="my-5 py-5">
        <form
          className="text-center border border-light p-5 col-md-6 col-sm-12 mx-auto shadow"
          style={{ backgroundColor: "#eee" }}
          onSubmit={this.onSubmit}
        >
          <p className="h4 mb-4">Sign up</p>

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
            type="email"
            name="email"
            className="form-control mb-4"
            placeholder="E-mail"
            onChange={this.onChange}
            value={email}
          />

          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={this.onChange}
            value={password}
          />
          <small
            id="defaultRegisterFormPasswordHelpBlock"
            className="form-text text-muted mb-4"
          >
            At least 8 characters and 1 digit
          </small>

          <input
            type="password2"
            name="password2"
            className="form-control"
            placeholder="Password2"
            onChange={this.onChange}
            value={password2}
          />
          <small
            id="defaultRegisterFormPasswordHelpBlock"
            className="form-text text-muted mb-4"
          >
            At least 8 characters and 1 digit
          </small>

          <button className="btn btn-info my-4 btn-block" type="submit">
            Register
          </button>
          <p>
            <Link to="login" className="lg mx-1">
              login
            </Link>
            if you have an account
          </p>

          <hr />

          <p>
            By clicking
            <em>Sign up</em> you agree to our
            <Link to="" target="_blank">
              terms of service
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
  { register }
)(RegistrationForm);
