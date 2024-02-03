import React from 'react';
import './BuyingFood.css';
import readPostRequest from "../api/readPostRequest";
import {useQuery} from "react-query";


function BuyingFood({username}) {
  const {isLoading, data: posts} = useQuery(
    ['posts', username],
    (username)=>readPostRequest(username)
    )
  // Placeholder for handling add to cart action
  const handleAddToCart = (id) => {
    console.log(`Add to cart clicked for post id: ${id}`);
    // Add to cart logic
  };

  const PlaceholderImage = () => (
    <div style={{ height: '200px', backgroundColor: '#eaeaea' }}>Image placeholder</div>
  );
  return (
    isLoading ? (
      <div>Loading...</div>
    ) : (
    <>
    {  console.log(posts)}
      <button className="cart-button">Cart</button>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h5>{post.companyName}</h5>
            <PlaceholderImage />
            <div className="post-info">
              <p>Product: {post.product}</p>
              <p>Quantity: {post.quantity}</p>
              <p>User: {post.username}</p>
            </div>
            <div className="post-button-group">
              <button className="add-to-cart" onClick={() => handleAddToCart(post.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
    )
  );
}

export default BuyingFood;
