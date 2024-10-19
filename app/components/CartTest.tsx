"use client";

import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";
import { RootState } from "../../store";



const CartTest = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state: RootState) => state.cart);

    const handleAddItem = () => {
        const newItem = {
            id: "1",
            name: "Item 1",
            price: 50,
            quantity: 5
        };
        dispatch(addItem(newItem));
    };

    const handleRemoveItem = (id: string) => {
        dispatch(removeItem(id));
    }


    return (
        <div>
            <h2>Cart Items</h2>
            <button onClick={handleAddItem}>Add item to cart</button>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} X ${item.price}
                        <button onClick={() => handleRemoveItem(item.id)}>Remove cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CartTest;