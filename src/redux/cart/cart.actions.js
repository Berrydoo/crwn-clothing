import CartTypes from "./cart.types";

export const toggleDropdown = () => ({
    type: CartTypes.toggleHidden,
});

export const addItem = (item) => ({
    type: CartTypes.addItem,
    payload: item,
});
