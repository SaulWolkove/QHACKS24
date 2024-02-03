import React, { useState } from "react";
import "./uploadFoodForm.css";
import addItemRequest from "../api/addItemRequest";

const FoodItem = (food, group, date, quantity, sizePerItem, measurementUnit, customUnit, username) => {
  const unit = measurementUnit === 'other' ? customUnit : measurementUnit;
  const item = {
    product: food,
    group: group,
    expiration: date,
    quantity: quantity,
    sizePerItem: sizePerItem ? `${sizePerItem} ${unit}` : undefined,
    user_queued: false,
    username: username,
  };
  return item;
};

function UploadFoodForm({ username }) {
  const [measurementUnit, setMeasurementUnit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const foodGroup = event.target.foodGroup.value;
    const expiryDate = event.target.expiryDate.value;
    const quantity = event.target.quantity.value;
    const sizePerItem = event.target.sizePerItem.value;
    const customUnit = measurementUnit === 'other' ? event.target.customUnit.value : '';

    const newFoodItem = FoodItem(name, foodGroup, expiryDate, quantity, sizePerItem, measurementUnit, customUnit, username);
    addItemRequest(newFoodItem);
  };

  return (
    <form className="upload-food-form" onSubmit={handleSubmit}>
      <h1 className="upload-food-title">Upload Your Food Here</h1>
      <label>Food Label: <input type="text" name="name" required /></label>
      <label>Food Group:
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
      <label>Expiry Date: <input type="date" name="expiryDate" required /></label>
      <div className="form-row">
        <label>Quantity: <input type="number" name="quantity" min="1" required /></label>
        <label>Size/Weight per Item: <input type="text" name="sizePerItem" /></label>
        <label>Measurement Unit:
          <select name="measurementUnit" required onChange={(e) => setMeasurementUnit(e.target.value)}>
            <option value="">Select Unit</option>
            <option value="kg">Kilograms (kg)</option>
            <option value="g">Grams (g)</option>
            <option value="lbs">Pounds (lbs)</option>
            <option value="oz">Ounces (oz)</option>
            <option value="L">Liters (L)</option>
            <option value="mL">Milliliters (mL)</option>
            <option value="count">Count</option>
            <option value="other">Other</option>
          </select>
        </label>
        {measurementUnit === 'other' && <input type="text" name="customUnit" placeholder="Specify unit" />}
      </div>
      <label>Upload Picture of the Item: <input type="file" name="image" accept="image/*" /></label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UploadFoodForm;
