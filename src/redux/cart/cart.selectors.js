import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.isHidden
);

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems
            .map((item) => item.qty)
            .reduce((prev, current) => prev + current, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
    cartItems
        .map((item) => item.qty * item.price)
        .reduce((cumVal, currVal) => cumVal + currVal, 0)
);
