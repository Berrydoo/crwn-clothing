import CartTypes from "./cart.types";

export const toggleDropdown = () => ({
    type: CartTypes.toggleHidden,
});

export const addItem = (item) => ({
    type: CartTypes.addItem,
    payload: item,
});

export const removeItem = (item) => ({
    type: CartTypes.removeItem,
    payload: item,
});

export const lowerQty = (item) => ({
    type: CartTypes.lowerQty,
    payload: item,
});
