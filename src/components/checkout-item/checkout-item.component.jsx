import React from "react";
import "./checkout-item.styles.scss";
import { removeItem, addItem, lowerQty } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, removeItem, lowerQty, addItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={cartItem.imageUrl} alt="item" />
        </div>
        <span className="name">{cartItem.name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => lowerQty(cartItem)}>
                &#10094;
            </div>
            <span className="value">{cartItem.qty}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>
                &#10095;
            </div>
        </span>
        <span className="price">{cartItem.price}</span>
        <div className="remove-button" onClick={() => removeItem(cartItem)}>
            &#10005;
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    lowerQty: (item) => dispatch(lowerQty(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
