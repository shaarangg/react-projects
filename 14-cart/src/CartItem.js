import React from "react";
import { useGlobalContext } from "./context";
function CartItem({ id, img, title, price, amount }) {
	return (
		<article className="cart-item">
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className="item-price">{price}</h4>
				<button className="remove-btn" onClick={() => console.log("remove item")}>
					remove item
				</button>
			</div>
			<div>
				<button className="amount-btn" onClick={() => console.log("Incerease")}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
					</svg>
				</button>
				<p className="amount">{amount}</p>
				<button className="amount-btn" onClick={() => console.log("decrease")}></button>
			</div>
		</article>
	);
}

export default cartItem;
