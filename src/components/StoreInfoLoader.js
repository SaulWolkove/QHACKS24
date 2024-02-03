//this is gonna load in the inventory of a store as well as any items that someone 
//has selected
import React, { useEffect } from 'react';
import './StoreInfoLoader.css';
import { useQuery } from 'react-query';
import readItemRequest from '../api/readItemRequest';
import deleteItemRequest from '../api/deleteItemRequest';

export default function StoreInfoLoader({ username }) {

    // current date
    const { isLoading, data: items } = useQuery(['items', username], () => readItemRequest(username));


    // confirm if use wants to delete
    const handleDelete = async (itemId) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            deleteItemRequest(itemId);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    // inventory
    return (
        <div className="inventory-container">
            {items && items.length > 0 ? (
                items.map((item) => (
                    <div key={item._id} className="item">
                        <div className="item-info">
                        {item.user_queued !== "" && (
                                <p>
                                    Item In a Cart: {item.user_queued}
                                </p>
                            )}
                            <p>Product: {item.product}</p>
                            <p>Expiration: {item.expiration}</p>
                            
                        </div>
                        <div>
                            <button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No items found.</p>
            )}
        </div>
    );
}
