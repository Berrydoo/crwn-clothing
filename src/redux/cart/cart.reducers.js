import CartTypes from "./cart.types";
import { addItemToCart, removeItemFromCart, lowerItemQty } from "./cart.utils";

const INITIAL_STATE = { isHidden: true, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.toggleHidden:
            return {
                ...state,
                isHidden: !state.isHidden,
            };
        case CartTypes.addItem:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        case CartTypes.removeItem:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        case CartTypes.lowerQty:
            return {
                ...state,
                cartItems: lowerItemQty(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
