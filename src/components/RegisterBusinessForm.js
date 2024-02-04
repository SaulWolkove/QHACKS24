import React from "react";
// import register business request
import updateUserRequest from "../api/updateUserRequest";
import "./TitlePage.css";

const Business = (username, name, location, id) => {
  return {
    email: username,
    accountType: "business",
    corp: name,
    location: location,
    id: id,
  };
};

function RegisterBusinessForm({ id, handleClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.businessName.value;
    const accountType = "business";
    const location = form.location.value;
    handleClose();

    // need to pass in account type? or just set constant
    const newBusiness = Business(name, accountType, location, id);
    updateUserRequest(newBusiness);
  };

  // on submit, should route back to close form and update footer and view

  return (
    <form className="reg-business-form" onSubmit={handleSubmit}>
      <h1 className="reg-business-title">Register Your Business Account</h1>
      <div className="form-group">
        <label>
          Company Name:
          <input type="text" name="businessName" required />
        </label>
      </div>
      <div className="form-group">
        <label>
          Building Address:
          <input type="text" name="location" required />
        </label>
      </div>
      <button type="submit" className="reg-here-butt">
        Register
      </button>
    </form>
  );
}

export default RegisterBusinessForm;
