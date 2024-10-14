import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { PersistConfig, persistReducer } from "redux-persist";
import cart from "../store/cartSlice";

// Define the combined reducers
const reducers = combineReducers({ cart });

// Define the persist configuration with proper types
const persistConfig: PersistConfig<ReturnType<typeof reducers>> = {
    key: "root",
    storage,
}

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Create the store and add middleware and devTools
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});

// Defint types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;