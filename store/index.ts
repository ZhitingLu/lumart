import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "./storage";
import { PersistConfig, persistReducer } from "redux-persist";
import cartReducer from "./cartSlice"; // Import your cartSlice

// Combine reducers (this is where you add your cartSlice)
const reducers = combineReducers({ cart: cartReducer });

const persistConfig: PersistConfig<ReturnType<typeof reducers>> = {
    key: "root",
    storage,
};

// Persist the combined reducer
const persistedReducer = persistReducer(persistConfig, reducers);

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

export default store;
