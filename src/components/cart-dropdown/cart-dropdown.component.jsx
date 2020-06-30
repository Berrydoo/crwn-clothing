import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { toggleDropdown } from "../../redux/cart/cart.actions";

import { createStructuredSelector } from "reselect";
import {
    selectCartItems,
    selectCartHidden,
} from "../../redux/cart/cart.selectors";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ isHidden, cartItems, history, dispatch }) =>
    !isHidden && (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <span className="empty-message">Your cart is empty</span>
                ) : (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                )}
            </div>
            <CustomButton
                onClick={() => {
                    dispatch(toggleDropdown());
                    history.push("/checkout");
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );

const mapStateToProps = createStructuredSelector({
    isHidden: selectCartHidden,
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
