import React, { Fragment } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBContainer
} from "mdbreact";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../store/actions/auth";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const bgPink = { backgroundColor: "#30caa0" };
    const link = { marginRight: "10px", marginLeft: "10px", color: "white" };

    // This components are shown if a user is authenticated
    const authlinks = (
      <Fragment>
        <MDBNavItem active>
          <Link style={link} to="/">
            HOME
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link style={link} to="/services">
            SERVICES
          </Link>
        </MDBNavItem>

        <MDBNavItem>
          <Link style={link} to="/contact">
            CONTACT
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link style={link} to="/dashboard">
            DASHBOARD
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link style={link} to="/patient">
            PATIENT
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link style={link} to="/">
            EVENTS
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link style={link} to="/departments">
            DEPARTMENTS
          </Link>
        </MDBNavItem>
        <MDBNavItem className="text-uppercase">
          {user ? `${user.username}` : ""}
        </MDBNavItem>
        <MDBNavItem>
          <Link style={link} onClick={this.props.logout}>
            LOGOUT
          </Link>
        </MDBNavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <MDBNavItem active>
          <Link style={link} to="/">
            HOME
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link style={link} to="/services">
            SERVICES
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link style={link} to="/contact">
            CONTACT
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link style={link} to="/login">
            LOGIN
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link style={link} to="/registration">
            REGISTER
          </Link>
        </MDBNavItem>
      </Fragment>
    );

    return (
      <div>
        <header>
          <MDBNavbar dark expand="sm" fixed="top" style={bgPink}>
            <MDBContainer>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                {/* <MDBNavbarNav left>
                  <Link to="/">PurityHospital</Link>
                </MDBNavbarNav> */}
                <MDBNavbarNav right>
                  {isAuthenticated ? authlinks : guestLinks}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
