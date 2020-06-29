import CartTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

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
        default:
            return state;
    }
};

export default cartReducer;
