import React from "react";
// import register business request
import updateUserRequest from '../api/updateUserRequest'

const Business = (username, name, location) => {
  return {
    email: username,
    accountType: "business",
    corp: name,
    location: location,
  };
};

function RegisterBusinessForm({ username }) {
  const handleSubmit = (event) => {
    const form = event.target;
    const name = form.businessName.value;
    const accountType = "business";
    const location = form.location.value;

    // need to pass in account type? or just set constant
    const newBusiness = Business(name, accountType, location);
    updateUserRequest(newBusiness)
  };

  // on submit, should route back to close form and update footer and view

  return (
    <form className="reg-business-form" onSubmit={handleSubmit}>
      <h1 className="reg-business-title">Register Your Business Account</h1>
      <label>
        Company Name: <input type="text" name="businessName" required />
      </label>
      <label>
        Building Address: <input type="text" name="location" required />
      </label>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterBusinessForm;
