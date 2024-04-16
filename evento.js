class ProductManager {
    constructor() {
        this.products = [];
    }

    generateId() {
        return '_' + Math.random().toString(14000).substr(3, 5);
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
       
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            throw new Error("El código del producto ya existe");
        }

        const id = this.generateId();
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(product);
        return product;
    }

    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        return product;
    }
}

