import React from 'react';
import './TitlePage.css'; // Import the CSS file for styling

function TitlePage() {
    return (
        <div className="title-container">
            <img src="freshsave_logo.png" alt="FreshSave Logo" className="logo" />
            <h1 className="title">FreshSave</h1>
            <p className="catchphrase">Where Every Bite Gets a Second Chance to Make a First Impression.</p>
            <div className="description">
                <p>FreshSave is an innovative platform dedicated to providing affordable grocery items to non-profit organizations. Our mission is to empower non-profits with cost-effective solutions, enabling them to create nutritious meals for individuals and families in need.</p>
                <p>At FreshSave, we understand the importance of accessibility to fresh and wholesome ingredients, especially for organizations dedicated to serving communities facing food insecurity. Through our platform, non-profits gain access to a wide range of grocery items at discounted rates, making it easier for them to procure essential ingredients for their meal programs and initiatives.</p>
                <p>We believe that every individual deserves access to nourishing food, and we are committed to supporting non-profits in their efforts to alleviate hunger and food insecurity. By offering affordable grocery items, FreshSave enables non-profit organizations to stretch their budgets further, maximizing their impact and reach within their communities.</p>
                <p>Our platform fosters collaboration and partnership between non-profits, suppliers, and donors, creating a network of support dedicated to addressing food insecurity at its core. Together, we can make a meaningful difference in the lives of those facing hunger and food insecurity, one meal at a time.</p>
                <p>Join us in our mission to create a world where no one goes hungry, where every bite has the power to nourish, uplift, and inspire hope. Together, let's make a positive impact and build a brighter future for individuals and families in need. Welcome to FreshSave, where every meal begins with compassion and ends with hope.</p>
            </div>
        </div>
    );
}

export default TitlePage;