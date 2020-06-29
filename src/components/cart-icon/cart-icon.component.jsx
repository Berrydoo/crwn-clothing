import React from "react";
import { toggleDropdown } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleDropdown, cartItemsCount }) => (
    <div className="cart-icon" onClick={toggleDropdown}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{cartItemsCount}</span>
    </div>
);

const mapStateToProps = (state) => ({
    isHidden: state.cart.isHidden,
    cartItemsCount: state.cart.cartItems.length,
});

const mapDispatchToProps = (dispatch) => ({
    toggleDropdown: () => dispatch(toggleDropdown()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
