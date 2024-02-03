import React from "react";
import "./uploadFoodForm.css";

function UploadFoodForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve form data
    const name = event.target.name.value;
    const foodGroup = event.target.foodGroup.value;
    const expiryDate = event.target.expiryDate.value;
    const imageFile = event.target.image.files[0]; // Access the uploaded image file

    // Do something with the form data (e.g., send it to a server)
    console.log("Food Name:", name);
    console.log("Food Group:", foodGroup);
    console.log("Expiry Date:", expiryDate);
    console.log("Image File:", imageFile);

    // You can add further processing or submission logic here
  };

  return (
    <form className="upload-food-form" onSubmit={handleSubmit}>
      <h1>Upload Your Food Here</h1>
      <div className="upload-food-title"></div>
      <label>
        Food Label:
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        Food Group:
        <select name="foodGroup" required>
          <option value="">Select Food Group</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Grains">Grains</option>
          <option value="Protein">Protein</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Expiry Date:
        <input type="date" name="expiryDate" required />
      </label>
      <br />
      <label>
        Upload Picture of the Item:
        <input type="file" name="image" accept="image/*" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UploadFoodForm;
