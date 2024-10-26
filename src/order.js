export default (_products) => {

    const product = (type, _name) => {

        const name = "(" + type + ") " + _name;

        let quantity = 0;

        const incQuantity = () => ++quantity;
        const decQuantity = () => quantity > 0 ? --quantity : 0;

        const getQuantity = () => quantity;

        return {

            type,
            name,
            incQuantity,
            decQuantity,
            getQuantity

        }

    }

    const products = [];
    for(const prod of _products) {
        for(let i = 1; i < prod.length; i++)
            products.push(product(prod[0], prod[i]));
    }

    const getOrder = () => products.filter((prod) => prod.getQuantity() > 0);

    const getProduct = (name) => products.find((prod) => prod.name === name);

    return {

        getOrder,
        getProduct

    }

}