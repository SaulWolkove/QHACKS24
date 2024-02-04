import React, { useState } from "react";
import "./uploadFoodForm.css";
import addItemRequest from "../api/addItemRequest";

const FoodItem = (
  food,
  group,
  date,
  quantity,
  measurement,
  sizeCategory,
  username
) => {
  return {
    product: food,
    group: group,
    expiration: date,
    quantity: quantity,
    measurement: measurement,
    sizeCategory: sizeCategory,
    user_queued: false,
    username: username,
  };
};

function UploadFoodForm({ username }) {
  const [sizeOption, setSizeOption] = useState("number");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const foodGroup = form.foodGroup.value;
    const expiryDate = form.expiryDate.value;
    const quantity = form.quantity.value;
    let measurement, sizeCategory;

    if (sizeOption === "number") {
      measurement = `${form.measurement.value} ${form.measurementUnit.value}`;
    } else if (sizeOption === "size") {
      sizeCategory = form.sizeCategory.value;
    }

    const newFoodItem = FoodItem(
      name,
      foodGroup,
      expiryDate,
      quantity,
      measurement,
      sizeCategory,
      username
    );
    addItemRequest(newFoodItem).then((response) => console.log(response));
  };
  const handlePostFoodClick = () => {
    window.open('/upload-food-form', '_blank'); // Open the UploadFoodForm page in a new tab
  };

  return (
    <form className="upload-food-form" onSubmit={handleSubmit}>
      <h1 className="upload-food-title">Upload Your Food Here</h1>
      <label>
        Food Label: <input type="text" name="name" required />
      </label>
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
      <label>
        Expiry Date: <input type="date" name="expiryDate" required />
      </label>
      <label>
        Quantity:{" "}
        <input
          type="number"
          name="quantity"
          min="1"
          required
          placeholder="Quantity"
        />
      </label>
      <div className="centered-content">
        <div className="option-container">
          <label>
            <input
              type="radio"
              name="sizeOption"
              value="number"
              checked={sizeOption === "number"}
              onChange={() => setSizeOption("number")}
            />
            Measurement
          </label>
          <label>
            <input
              type="radio"
              name="sizeOption"
              value="size"
              checked={sizeOption === "size"}
              onChange={() => setSizeOption("size")}
            />
            Size
          </label>
        </div>
        <div className="input-container">
          {sizeOption === "number" && (
            <>
              <input type="number" name="measurement" placeholder="Amount" />
              <select name="measurementUnit">
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="lbs">lbs</option>
                <option value="oz">oz</option>
              </select>
            </>
          )}
          {sizeOption === "size" && (
            <select name="sizeCategory">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          )}
        </div>
        <label>
          Picture (optional):{" "}
          <input type="file" name="image" accept="image/*" />
        </label>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default UploadFoodForm;
