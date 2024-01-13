// src/store/products.js
import {defineStore} from 'pinia';
import jsonData from "@/products/products";

export const productsStore = defineStore('products', {
    state: () => ({
        products: [],
        cart: [],
        startCheckout: false
    }),
    actions: {
        async fetchProducts() {
            try {
                    this.products = jsonData;
                // Update the store with the fetched products
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        addToCart(product) {
            // if price_id is already in, change quantity to 2
            if(this.cart.length === 0 ) {
                this.cart.push(product)
                return
            }
            let index = 0

            for(const productIter of this.cart) {
                if(productIter.price_id === product.price_id) {
                    console.log("this cart", this.cart)
                    console.log("index", index)
                    this.cart.at(index).quantity += 1
                    return
                }
                index += 1
            }
            console.log("new push")
            this.cart.push(product)

        },
        decrementAmountCount(product) {
            let index = 0
            for(const productIter of this.cart) {
                if(productIter.price_id === product.price_id && productIter.quantity > 1) {
                    this.cart.at(index).quantity -= 1
                    return
                }
                index += 1
            }
            try {
                this.cart = this.cart.filter(
                    (t) => t !== product
                );
            } catch (e) {
                console.log(e)
            }
        },
        getLineItems() {

            return productsStore().cart.map(cartItem => ({
                price: cartItem.price_id,
                quantity: Number(cartItem.quantity)
            }));
        }
    },
});