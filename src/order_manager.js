export default (products) => {

    const orderItem = (itemArr) => {

        const name = itemArr[0];

        const subItems = [];
        for(let i = 1; i < itemArr.length; i++) {

            const newSubItem = ((type) => {
                const name = itemArr[i];
                let quantity = 0;
                const getQuantity = () => quantity;
                const incQuantity = () => quantity < 99 ? ++quantity : 99;
                const decQuantity = () => quantity > 0 ? --quantity : 0;
                const getString = () => `(${type}) ${name}`;
                return {type, name, quantity, getQuantity, incQuantity, decQuantity, getString};
            })(name);

            subItems.push(newSubItem);

        }

        return {

            name,
            subItems

        };

    }

    const orderItems = [];
    for(const prod of products)
        orderItems.push(orderItem(prod));

    const addToOrder = (newOrderItem) => {

        let addedItem;
        for(const item of orderItems) {
            for(const subItem of item.subItems) {
                if(subItem.getString() === newOrderItem)
                    addedItem = subItem;
            }
        }

        if(addedItem) {
            addedItem.incQuantity();
            updateDisplays();
        }

    }

    const removeFromOrder = (itemToRemove) => {

        let removedItem;
        for(const item of orderItems) {
            for(const subItem of item.subItems) {
                if(subItem.getString() === itemToRemove)
                    removedItem = subItem;
            }
        }

        if(removedItem) {
            removedItem.decQuantity();
            updateDisplays();
        }

    }

    const quantityDisplays = [];
    const addQuantityDisplay = (newQuantDisplay) => {
        quantityDisplays.push(newQuantDisplay);
    }

    const updateDisplays = () => {
        for(const qd of quantityDisplays)
            qd.display(qd.source());
    }

    return {

        orderItems,
        addToOrder,
        removeFromOrder,
        addQuantityDisplay

    };

}