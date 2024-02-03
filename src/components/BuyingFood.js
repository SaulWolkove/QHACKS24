import React, { useState, useEffect } from "react";
import "./BuyingFood.css";
import readPostRequest from "../api/readPostRequest";
import { useQuery } from "react-query";
import updateItemRequest from "../api/updateItemRequest";

function BuyingFood({ username }) {
  // state for posts and expiring items by user
  const [posts, setPosts] = useState([]);
  const [expiringItemsByUser, setExpiringItemsByUser] = useState({});

  // fetch posts
  const { isLoading } = useQuery(
    ["posts", username],
    () => readPostRequest(username),
    {
      onSuccess: (data) => {
        // sort data by expiration date and update states
        const sortedData = data.sort(
          (a, b) => new Date(a.expiration) - new Date(b.expiration)
        );
        setPosts(sortedData);
        setExpiringItemsByUser(categorizeExpiringItems(sortedData));
      },
    }
  );

  // state for the current date, updated every minute (every second leads to other performance issues)
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60); // update current date every minute

    return () => {
      clearInterval(timer);
    };
  }, []);

  // calculate days difference between expiration date and current date
  const getDaysDifference = (expirationDate) => {
    const expDate = new Date(expirationDate);
    const timeDiff = expDate.getTime() - currentDate.getTime();
    const daysDiff = new Date(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };

  // categorize items that expire soon by username
  const categorizeExpiringItems = (posts) => {
    const dictionary = {};

    posts.forEach((post) => {
      // creates a dictionary. each user has the products that are almost expired
      if (getDaysDifference(post.expiration) < 2) {
        if (!dictionary[post.username]) {
          dictionary[post.username] = [];
        }
        dictionary[post.username].push(post);
      }
    });

    return dictionary;
  };

  // handle add to cart action
  const handleAddToCart = (id) => {
    updateItemRequest(id, username);
  };

  // placeholder image component
  const PlaceholderImage = () => (
    <div style={{ height: "200px", backgroundColor: "#eaeaea" }}>
      Image placeholder
    </div>
  );

  // render loading state or posts list
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <button className="cart-button">Cart</button>
      <div className="posts-container">
        {Object.entries(expiringItemsByUser).map(([username, items]) => (
          <div key={username}>
            <h3>{username}</h3>
            <ul>
              {items.map((item) => (
                <li key={item._id}>{item.product} expires soon!</li>
              ))}
            </ul>
          </div>
        ))}
        {posts.map((post) => (
          <div key={post._id} className="post">
            <PlaceholderImage />
            <div className="post-info">
              <p>Product: {post.product}</p>
              <p>Quantity: {post.quantity}</p>
              <p>
                Expiration: {post.expiration}
                {getDaysDifference(post.expiration) < 2 && (
                  <span className="expires-soon-label"> EXPIRES SOON</span>
                )}
              </p>
              <br />
              <p>Posted By: {post.username ? post.username : "N/A"}</p>
            </div>
            <div className="post-button-group">
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(post._id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BuyingFood;
