import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import cartItems from "./data";
const initialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0,
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};
	return <AppContext.Provider value={{ ...state, clearCart }}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
