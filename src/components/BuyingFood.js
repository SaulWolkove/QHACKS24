import React from 'react';
import './BuyingFood.css';

function BuyingFood() {
  // Simulating a list of posts with necessary details
  const posts = [
    {
      id: 1,
      companyName: 'Metro',
      expiryDate: '2024-05-01',
      postedDate: '2024-01-25',
      description: 'Fresh Bananas'
    },
    {
      id: 2,
      companyName: 'Loblaws',
      expiryDate: '2024-05-01',
      postedDate: '2024-01-25',
      description: 'Fresh Bananas'
    },
    // Add more posts
  ];

  // Placeholder for handling add to cart action
  const handleAddToCart = (id) => {
    console.log(`Add to cart clicked for post id: ${id}`);
    // Add to cart logic
  };

  const PlaceholderImage = () => (
    <div style={{ height: '200px', backgroundColor: '#eaeaea' }}>Image placeholder</div>
  );

  return (
    <>
      <button className="cart-button">Cart</button>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h5>{post.companyName}</h5>
            <PlaceholderImage />
            <div className="post-info">
              <p>Description: {post.description}</p>
              <p>Expiry Date: {post.expiryDate}</p>
              <p>Posted: {post.postedDate}</p>
            </div>
            <div className="post-button-group">
              <button className="add-to-cart" onClick={() => handleAddToCart(post.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BuyingFood;
