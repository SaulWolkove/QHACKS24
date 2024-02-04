import React, { useState, useEffect, useMemo } from "react";
import "./BuyingFood.css";
import readPostRequest from "../api/readPostRequest";
import { useQuery } from "react-query";
import updateItemRequest from "../api/updateItemRequest";
import Header from "./Header";
import LogoMain from "./LogoMain.png";
import getPythonExec from "../api/getPythonExec";

function BuyingFood({ username }) {
  // state for posts
  const [posts, setPosts] = useState([]);

  // fetch posts
  const { isLoading, data: fetchedPosts } = useQuery(
    ["posts", username],
    () => readPostRequest(username),
    {
      onSuccess: (data) => {
        // sort data by expiration date and update posts state
        const sortedData = data.sort(
          (a, b) => new Date(a.expiration) - new Date(b.expiration)
        );
        setPosts(sortedData);
      },
    }
  );

  // state for the current date, updated every minute
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60); // update current date every minute

    return () => clearInterval(timer);
  }, []);

  // calculate days difference between expiration date and current date
  const getDaysDifference = (expirationDate) => {
    const expDate = new Date(expirationDate);
    const timeDiff = expDate.getTime() - currentDate.getTime();
    return Math.floor(timeDiff / (1000 * 3600 * 24));
  };

  // useMemo to memoize the categorization of items that expire soon by username
  const expiringItemsByUser = useMemo(() => {
    const dictionary = {};
    posts.forEach((post) => {
      if (getDaysDifference(post.expiration) < 2) {
        if (!dictionary[post.username]) {
          dictionary[post.username] = [];
        }
        dictionary[post.username].push(post);
      }
    });

    return dictionary;
  }, [posts, getDaysDifference, currentDate]); // Recalculate when posts or currentDate changes

  async function createMealKit(name, num_meals, items) {
    let result;
    try {
      result = await getPythonExec(name, num_meals, items);
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }

    return result;
  }

  const mealKits = useMemo(() => {
    var mealKitList = [];
    for (const corp in expiringItemsByUser) {
      var num_meals = expiringItemsByUser[corp].length;
      num_meals < 5 ? (num_meals = 1) : (num_meals /= 5);
      const items = expiringItemsByUser[corp];
      const result = createMealKit(corp, num_meals, items);

      mealKitList.push(result);
    }
    return mealKitList;
  }, [expiringItemsByUser]);

  const bleh = useMemo(() => console.log(mealKits), [mealKits]);

  // handle add to cart action
  const handleAddToCart = (id) => {
    updateItemRequest(id, username).then(() => {
      // Optionally invalidate or refetch posts query to reflect changes
    });
  };

  // Placeholder image component
  const PlaceholderImage = () => (
    <img src={LogoMain} alt="Logo" className="centered-logo" />
  );

  // Render loading state or posts list
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      {!isLoading && bleh}
      <Header />
      <div className="logo-container">
        <PlaceholderImage />
      </div>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post._id} className="post">
            <PlaceholderImage />
            <div className="post-info">
              <p>Product: {post.product}</p>
              <p>Quantity: {post.quantity}</p>
              <p>Expiration: {post.expiration}</p>
              {getDaysDifference(post.expiration) < 2 && (
                <span className="expires-soon-label">EXPIRES SOON</span>
              )}
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
