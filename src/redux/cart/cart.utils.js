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
