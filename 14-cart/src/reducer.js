const reducer = (state, action) => {
	if (action.type === "CLEAR_CART") {
		return { ...state, cart: [] };
	}
	if (action.type === "REMOVE_ITEM") {
		const newCart = state.cart.filter((cartItem) => cartItem.id !== action.payload);
		return { ...state, cart: newCart };
	}
	if (action.type === "INCREASE_ITEM") {
		const newCart = state.cart.map((cartItem) => {
			if (cartItem.id === action.payload) {
				return { ...cartItem, amount: cartItem.amount + 1 };
			}
			return cartItem;
		});
		return { ...state, cart: newCart };
	}
	if (action.type === "DECREASE_ITEM") {
		const newCart = state.cart
			.map((cartItem) => {
				if (cartItem.id === action.payload && cartItem.amount > 0) {
					return { ...cartItem, amount: cartItem.amount - 1 };
				}
				return cartItem;
			})
			.filter((cartItem) => cartItem.amount !== 0);
		return { ...state, cart: newCart };
	}
	return state;
};
export default reducer;
