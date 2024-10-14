import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Define the initial state type
interface CartItem {
    id: string;
    quantity: number;
}


// create the slice
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        // // Action to add an item to the cart
        // addItem(state, action: PayloadAction<CartItem>) {
        //     const existingItem = state.items.find(item => item.id === action.payload.id);
        //     if (existingItem) {
        //         // Update the quantity if the item already exists
        //         existingItem.quantity += action.payload.quantity;
        //     } else {
        //         // Add new item to the cart
        //         state.items.push(action.payload);
        //     }
        // },
        // // Action to remove an item from the cart
        // removeItem(state, action: PayloadAction<string>) {
        //     state.items = state.items.filter(item => item.id !== action.payload);
        // },
        // // Action to clear the cart
        // clearCart(state) {
        //     state.items = [];
        // },
    }
});

export default cartSlice.reducer;