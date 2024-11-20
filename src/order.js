export default (items) => {

    const clientInfo = (() => {

        let valid = true;

        const name = {firstName: "Joe", lastName: "Table"};
        const address = {
                         address: "123, 45th Street",
                         address2: "",
                         city: "Oakland Park",
                         state: "FL",
                         postalCode: "12345"
                        };
        let email = "joetable@gmail.com";
        let phone = "(2) 13627-9841";
        const delivery = {forWho: "Myself", type: "AtHome"}

        const getName = () => `${name.firstName} ${name.lastName}`;

        const getAddress = () => `${address.address}, ${address.address2}<br>` +
                                   `${address.city}, ${address.state}<br>` +
                                   `${address.postalCode}`;

        return {

            valid,
            name,
            address,
            email,
            phone,
            delivery,
            getName,
            getAddress

        };

    })();

    const product = (name, price) => {

        let quantity = 1;

        const incQuantity = () => quantity < 99 ? ++quantity : 99;
        const decQuantity = () => quantity > 0 ? --quantity : 0;

        const getQuantity = () => quantity;

        return {

            name,
            price,
            incQuantity,
            decQuantity,
            getQuantity

        };

    }

    const products = [];

    const addProduct = (name, price) => {
        products.push(product(name, price));
    }

    const removeProduct = (name) => {
        const prod = getProduct(name);
        if(prod) {
            let index = products.indexOf(prod);
            products.splice(index, 1);
        }
    }

    const getQuantity = (name) => {
        const prod = getProduct(name);
        if(prod)
            return prod.getQuantity();
        else
            return 0;
    }

    const incQuantity = (name, price) => {
        const prod = getProduct(name);
        if(prod)
            return prod.incQuantity();
        else {
            addProduct(name, price);
            return 1;
        }
    }

    const decQuantity = (name) => {
        const prod = getProduct(name);
        if(prod) {
            let quantity =  prod.decQuantity();
            if(quantity == 0)
                removeProduct(name);
            return quantity;
        }
        else
            return 0;
    }

    const getProducts = () => products;

    const getOrder = () => {
        items = []
        for(const item of products.filter((prod) => prod.getQuantity() > 0))
            items.push({name: item.name, quantity: item.getQuantity(), price: item.price});
        return items;
    }

    const hasProduct = (name) => products.some((prod) => prod.name === name);
    const getProduct = (name) => products.find((prod) => prod.name === name);

    const addClientInfo = (name, address, email, phone, delivery) => {

        Object.assign(clientInfo.name, name);
        Object.assign(clientInfo.address, address);
        clientInfo.email = email;
        clientInfo.phone = phone;
        Object.assign(clientInfo.delivery, delivery);

        clientInfo.valid = true;

    }

    const hasAddress = () => address.valid;
    const getClientName = () => clientInfo.getName();
    const getClientAddress = () => clientInfo.getAddress();

    return {

        getQuantity,
        incQuantity,
        decQuantity,
        getProducts,
        getOrder,
        hasProduct,
        getProduct,
        addClientInfo,
        hasAddress,
        getClientName,
        getClientAddress

    };

}