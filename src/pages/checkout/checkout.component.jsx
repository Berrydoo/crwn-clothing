import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
    selectCartItems,
    selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ cartItems, cartGrandTotal }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        <div className="cart-items">
            {cartItems.map((item) => (
                <CheckoutItem key={item.id} cartItem={item} />
            ))}
        </div>
        <div className="total">
            <span>TOTAL: ${cartGrandTotal}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartGrandTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
