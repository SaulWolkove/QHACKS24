import React from 'react';
import './NonForProfitWaiver.css'; // Ensure CSS file is created for styling

function NonForProfitWaiver() {
  return (
    <div className="non-for-profit-waiver">
      <h1>Non-Profit Waiver Agreement</h1>
      <p>As a non-profit organization participating in the FreshSave platform, you agree to the following conditions:</p>
      <ul>
        <li>You are responsible for verifying the quality and safety of the food items you collect from grocery stores. FreshSave is not liable for the condition of donated items.</li>
        <li>You acknowledge that FreshSave is not responsible for the actions or behaviors of grocery stores participating in the platform.</li>
        <li>You agree to not hold FreshSave liable for any illegal activities or damages arising from the collection and distribution of donated food items.</li>
        <li>FreshSave serves solely as a platform to facilitate the connection between your organization and grocery stores looking to donate nearly expired food items. We are not involved in the actual transaction or distribution process.</li>
      </ul>
      <p>By agreeing to this waiver, you release FreshSave from any claims, damages, or legal actions related to the donations received through our platform.</p>
      <button>Agree and Continue</button> {/* Implement functionality as needed */}
    </div>
  );
}

export default NonForProfitWaiver;
