import CartTypes from "./cart.types";

const INITIAL_STATE = { isHidden: true };

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.toggleHidden:
            return {
                ...state,
                isHidden: !state.isHidden,
            };
        default:
            return state;
    }
};

export default cartReducer;
