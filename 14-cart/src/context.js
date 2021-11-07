import React, { useContext, useReducer, useEffect } from "react";
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
		dispatch({ type: "INCREASE_ITEM", payload: id });
	};
	const decreaseItem = (id) => {
		dispatch({ type: "DECREASE_ITEM", payload: id });
	};

	const fetchData = async () => {
		dispatch({ type: "LOADING" });
		const resp = await fetch("https://course-api.com/react-useReducer-cart-project");
		const cart = await resp.json();
		dispatch({ type: "DISPLAY_ITEMS", payload: cart });
	};
	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
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
