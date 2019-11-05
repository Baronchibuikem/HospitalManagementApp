import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./containers/Homepage";
import OurServices from "./components/OurServices/OurServices";
import ContactPage from "./components/Appointment/Appointment";
import MessageSuccessful from "./components/Appointment/MessageSuccess";
import Dashboard from "./components/Dashboard/Dashboard";
import BlogPage from "./components/Blog/Blog";
import LoginForm from "./components/Login/LoginForm";
import RegistrationForm from "./components/Registration/RegistrationForm";
import PatientRegForm from "./components/Patient/PatientRegForm";
import PatientSubmitted from "./components/Patient/PatientSubmitted";
import PrivateRoute from "./components/common/PrivateRoute";
import Departments from "./components/Departments/Departments";

// routes to different componenets. Private routes indicates that the component is private/protectected.
const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/services" component={OurServices} />
    <Route exact path="/contact" component={ContactPage} />
    <Route exact path="/blog" component={BlogPage} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/registration" component={RegistrationForm} />
    <Route exact path="/departments" component={Departments} />
    <Route exact path="/patient" component={PatientRegForm} />
    <Route exact path="/appointmentsuccess" component={MessageSuccessful} />
    <PrivateRoute exact path="/success" component={PatientSubmitted} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
  </Switch>
);
export default BaseRouter;
