import React from "react";
import { Link } from "react-router-dom";

const PatientSubmitted = () => {
  return (
    <div className="text-center mt-5 p-5 container mx-auto vh-100">
      <h3 className="pt-5 mt-5">Thanks for registering this patient</h3>
      <h5>
        click{" "}
        <Link to="/patient" className="success">
          Here
        </Link>{" "}
        to register another patient or go back to{" "}
        <Link to="/" className="success">
          Homepage
        </Link>
      </h5>
    </div>
  );
};
export default PatientSubmitted;

// this component is show when a patient has been successfully registered by the PatientRegForm component
