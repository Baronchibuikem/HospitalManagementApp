import React from "react";
import { Link } from "react-router-dom";

const MessageSuccessful = () => {
  return (
    <div className="text-center mt-5 p-5 container mx-auto vh-100 ">
      <h3 className="pt-5 mt-5">
        Your Message was sent Successfully, We will get back to you soon
      </h3>
      <h5>
        click{" "}
        <Link to="/" className="success">
          Here
        </Link>{" "}
        to go back to Homepage
      </h5>
    </div>
  );
};
export default MessageSuccessful;

// this component is show when a patient has been successfully registered by the PatientRegForm component
