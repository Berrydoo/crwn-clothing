import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, qty } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt={name} />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {qty} @ ${price} = ${qty * price}
            </span>
        </div>
    </div>
);

export default CartItem;
