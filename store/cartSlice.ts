import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state and its type
interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

// Initial state with some items (can be an empty array as well)
const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Example action to add an item to the cart
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.push(action.payload);
    },
    // Example action to remove an item from the cart
    removeItem: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// Export actions and reducer
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
