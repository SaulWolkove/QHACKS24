import React, { useState, useEffect } from 'react';
import './BuyingFood.css';
import readPostRequest from "../api/readPostRequest";
import {useQuery} from "react-query";
import updateItemRequest from '../api/updateItemRequest';

function BuyingFood({username}) {
  const [posts, setPosts] = useState([]);
  const { isLoading } = useQuery(['posts', username], () => readPostRequest(username), {
    onSuccess: (data) => {
      // sorting by expiry date
      const sortedData = data.sort((a, b) => new Date(a.expiration) - new Date(b.expiration));
        setPosts(sortedData);
    },
});
  // current date
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
      const timer = setInterval(() => {
          setCurrentDate(new Date());
      }, 1000 * 60); // Update every minute instead of every second for performance

      return () => {
          clearInterval(timer);
      };
  }, []);

  const getDaysDifference = (expirationDate) => {
      const expDate = new Date(expirationDate);
      const timeDiff = expDate - currentDate;
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      return daysDiff;
  };
  const handleAddToCart = (id) => {
    updateItemRequest(id,username);
    // Add to cart logic
  };
  const PlaceholderImage = () => (
    <div style={{ height: '200px', backgroundColor: '#eaeaea' }}>Image placeholder</div>
  );
  return (
    isLoading ? <div>Loading...</div> : (
      <>
        <button className="cart-button">Cart</button>
        <div className="posts-container">
          {posts.map((post) => (
            <div key={post._id} className="post">
              <PlaceholderImage />
              <div className="post-info">
                <p>Product: {post.product}</p>
                <p>Quantity: {post.quantity}</p>
                <p>User: {post.username}</p>
                <p>
                  Expiration: {post.expiration}
                  {getDaysDifference(post.expiration) < 2 && <span className="expires-soon-label"> EXPIRES SOON</span>}
                </p>
              </div>
              <div className="post-button-group">
                <button className="add-to-cart" onClick={() => handleAddToCart(post._id)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  );
}

export default BuyingFood;