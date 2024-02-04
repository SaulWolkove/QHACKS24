import React from 'react';
import './GroceryStoreWaiver.css'; // Ensure CSS file is created for styling

function GroceryStoreWaiver() {
  return (
    <div className="grocery-store-waiver">
      <h1>Grocery Store Waiver Agreement</h1>
      <p>As a participating grocery store in the FreshSave platform, you agree to the following conditions:</p>
      <ul>
        <li>You are responsible for ensuring the quality and safety of the food items you donate. FreshSave is not liable for the condition of donated items.</li>
        <li>You acknowledge that there may be instances where a non-profit organization or individual may not show up to collect the donated items. FreshSave is not responsible for ensuring the collection of donated items.</li>
        <li>You agree to not hold FreshSave liable for any illegal activities conducted by non-profit organizations or individuals who receive your donations.</li>
        <li>FreshSave serves solely as a platform to facilitate the donation of nearly expired food items from your store to non-profit organizations. We are not involved in the actual transaction or distribution process.</li>
      </ul>
      <p>By agreeing to this waiver, you release FreshSave from any claims, damages, or legal actions related to the donations facilitated through our platform.</p>
      <button>Agree and Continue</button> {/* Implement functionality as needed */}
    </div>
  );
}

export default GroceryStoreWaiver;
