import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "./storage";
import { PersistConfig, persistReducer } from "redux-persist";
import cartReducer from "./cartSlice"; // Import your cartSlice
import persistStore from "redux-persist/es/persistStore";

// // Combine reducers (this is where you add your cartSlice)
// const reducers = combineReducers({ cart: cartReducer });

// const persistConfig: PersistConfig<ReturnType<typeof reducers>> = {
//     key: "root",
//     storage,
// };

// Configuration for redux-persist
const persistConfig = {
    key: "root",
    storage,
  };
  
  // Combine reducers 
  const rootReducer = combineReducers({
    cart: cartReducer,  // Include the cart slice
  });

// Persist the combined reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store and apply middleware
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false, thunk: true}),
    devTools: process.env.NODE_ENV !== "production",
});

// Export types for usage in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
