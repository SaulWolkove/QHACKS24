import {useQuery} from "react-query";
import readItemRequest from "../api/readItemRequest";
import deleteItemRequest from "../api/readItemRequest";

import React from 'react';

function CartPage({username}) {
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
    return (
        <div>
            <h1>Cart Page</h1>
            {items.map}
        </div>
    );
}

export default CartPage;
