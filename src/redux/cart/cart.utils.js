export const addItemToCart = (currentItems, newItem) => {
    const existingItem = currentItems.find((item) => item.id === newItem.id);

    if (existingItem) {
        return currentItems.map((item) => {
            return item.id === newItem.id
                ? { ...item, qty: item.qty + 1 }
                : item;
        });
    } else {
        return [...currentItems, { ...newItem, qty: 1 }];
    }
};

export const removeItemFromCart = (currentItems, removeItem) => {
    return currentItems.filter((item) => item.id !== removeItem.id);
};

export const lowerItemQty = (currentItems, removeItem) => {
    const item = currentItems.find((item) => item.id === removeItem.id);

    if (item.qty === 1) {
        return currentItems.filter((item) => item.id !== removeItem.id);
    } else {
        return currentItems.map((item) => {
            return item.id === removeItem.id
                ? { ...item, qty: item.qty - 1 }
                : item;
        });
    }
};
