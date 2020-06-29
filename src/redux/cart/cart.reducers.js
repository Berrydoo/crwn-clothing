import CartTypes from "./cart.types";

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
                cartItems: [...state.cartItems, action.payload],
            };
        default:
            return state;
    }
};

export default cartReducer;
