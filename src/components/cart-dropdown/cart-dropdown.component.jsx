import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ isHidden }) =>
    !isHidden && (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );

const mapStateToProps = (state) => ({ isHidden: state.cart.isHidden });

export default connect(mapStateToProps)(CartDropdown);
