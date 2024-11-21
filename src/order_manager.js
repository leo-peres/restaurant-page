import orderFactory from "./order.js"

export default (products) => {

    const order = orderFactory();

    const orderItem = (itemArr) => {

        const name = itemArr[0];

        const subItems = [];
        for(let i = 2; i < itemArr.length; i++) {

            const newSubItem = ((type) => {
                const name = itemArr[i];
                let price = itemArr[1];
                const id = `(${type}) ${name}`;
                const getQuantity = () => order.getQuantity(id);
                const incQuantity = () => order.incQuantity(id);
                const decQuantity = () => order.decQuantity(id);
                const getString = () => id;
                return {type, price, name, getQuantity, incQuantity, decQuantity, getString};
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
            order.incQuantity(addedItem.getString(), addedItem.price);
            update();
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
            order.decQuantity(removedItem.getString());
            update();
        }

    }

    const clearOrder = () => {
        order.clear();
        update();
    }

    const quantityDisplays = [];
    const addQuantityDisplay = (newQuantDisplay) => {
        quantityDisplays.push(newQuantDisplay);
    }

    const updateQuantityDisplays = () => {
        for(const qd of quantityDisplays)
            qd.display(qd.source());
    }

    const orderDisplays = [];
    const addOrderDisplay = (newOrderDisplay) => {
        orderDisplays.push(newOrderDisplay);
        updateOrderDisplays();
    }

    const updateOrderDisplays = () => {
        const items = order.getOrder();
        for(const orderDisplay of orderDisplays)
            orderDisplay.update(items);
    }

    const totalPriceDisplays = [];
    const addTotalPriceDisplay = (newTotalPriceDisplay) => {
        totalPriceDisplays.push(newTotalPriceDisplay);
        updateTotalPriceDisplays();
    }

    const updateTotalPriceDisplays = () => {
        const totalPrice = order.getTotalPrice();
        for(const totalPriceDisplay of totalPriceDisplays)
            totalPriceDisplay(totalPrice);
    }

    const update = () => {
        updateQuantityDisplays();
        updateOrderDisplays();
        updateTotalPriceDisplays();
    }

    return {

        orderItems,
        addToOrder,
        removeFromOrder,
        clearOrder,
        addQuantityDisplay,
        addOrderDisplay,
        addTotalPriceDisplay

    };

}