import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useGlobalContext } from "./context";
function CartItem({ id, img, title, price, amount }) {
	const { removeItem, increaseItem, decreaseItem } = useGlobalContext();
	return (
		<article className="cart-item">
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className="item-price">{price}</h4>
				<button className="remove-btn" onClick={() => removeItem(id)}>
					remove item
				</button>
			</div>
			<div>
				<button className="amount-btn" onClick={() => increaseItem(id)}>
					<MdKeyboardArrowUp />
				</button>
				<p className="amount">{amount}</p>
				<button className="amount-btn" onClick={() => decreaseItem(id)}>
					<MdKeyboardArrowDown />
				</button>
			</div>
		</article>
	);
}

export default CartItem;
