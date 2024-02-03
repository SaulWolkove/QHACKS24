import React from "react";
import "./uploadFoodForm.css";
import addItemRequest from "../api/addItemRequest";
// import FoodItem from './FoodItem'

const FoodItem = (food, group, date) => {
  const item = {
    product: food,
    group: group,
    date: date,
  };
  return item;
};

function UploadFoodForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve form data
    const name = event.target.name.value;
    const foodGroup = event.target.foodGroup.value;
    const expiryDate = event.target.expiryDate.value;
    // const imageFile = event.target.image.files[0]; // Access the uploaded image file

    // console.log(name);

    const newFoodItem = FoodItem(name, foodGroup, expiryDate);
    console.log(newFoodItem);

    console.log(newFoodItem.group)
    addItemRequest(newFoodItem);
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
