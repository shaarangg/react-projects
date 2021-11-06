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
	const removeItem = (id) => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};
	const increaseItem = (id) => {
		// console.log("increase");
		dispatch({ type: "INCREASE_ITEM", payload: id });
	};
	const decreaseItem = (id) => {
		// console.log("decrease");
		dispatch({ type: "DECREASE_ITEM", payload: id });
	};
	useEffect(() => {
		console.log("Hello world");
		dispatch({ type: "GET_TOTALS" });
	}, [state.cart]);
	return (
		<AppContext.Provider value={{ ...state, clearCart, removeItem, increaseItem, decreaseItem }}>
			{children}
		</AppContext.Provider>
	);
};
export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
