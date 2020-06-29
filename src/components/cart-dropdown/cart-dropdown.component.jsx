import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import {
    selectCartItems,
    selectCartHidden,
} from "../../redux/cart/cart.selectors";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ isHidden, cartItems }) =>
    !isHidden && (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length === 0
                    ? "Please add something to your cart"
                    : cartItems.map((item) => (
                          <CartItem key={item.id} item={item} />
                      ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );

const mapStateToProps = createStructuredSelector({
    isHidden: selectCartHidden,
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
