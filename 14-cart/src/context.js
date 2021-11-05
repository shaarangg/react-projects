import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const [cart, setCart] = useState(cartItems);
	return <AppContext.Provider value={{ cart }}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
