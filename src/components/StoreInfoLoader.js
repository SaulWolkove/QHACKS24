//this is gonna load in the inventory of a store as well as any items that someone 
//has selected
import React from 'react';
import './StoreInfoLoader.css';
import { useQuery } from 'react-query';
import readItemRequest from '../api/readItemRequest';
import './StoreInfoLoader.css';
import deleteItemRequest from '../api/deleteItemRequest';

// ask if user wants to delete
const handleDelete = async (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
        deleteItemRequest(itemId)
    }
};

export default function StoreInfoLoader({ username }) {
    const { isLoading, data: items } = useQuery(
        ['items', username],
        () => readItemRequest(username)
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="inventory-container">
            {items && items.length > 0 ? (
                items.map((item) => (
                    <div key={item._id} className="item">
                        <div className="item-info">
                            <p>Product: {item.product}</p>
                            <p>Expiration: {item.expiration}</p>
                            <button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button></div>
                    </div>
                ))
            ) : (
                <p>No items found.</p>
            )}
        </div>
    );
}
