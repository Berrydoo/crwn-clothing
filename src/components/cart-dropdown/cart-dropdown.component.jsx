import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ isHidden, cartItems }) =>
    !isHidden && (
        <div className="cart-dropdown">
            {cartItems.map((item) => (
                <div className="cart-items">
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                </div>
            ))}

            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );

const mapStateToProps = (state) => ({
    isHidden: state.cart.isHidden,
    cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
