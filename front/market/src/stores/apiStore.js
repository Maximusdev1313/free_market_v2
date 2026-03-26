import { defineStore } from 'pinia'
import axios from 'axios'
import { nextTick, onMounted } from 'vue'
// import VueCookies from "vue-cookies";
// import { format } from "date-fns";

export const apiStore = defineStore('apiStore', {
    state: () => ({
        api: 'https://fakestoreapi.com/products',
        products: null,
        cart: [],
        totalCost: 0,
    }), actions: {
        async fetchProducts() {
            try {
                const response = await axios.get(`${this.api}`);

                this.products = response.data;
                console.log(response.data);
                console.log(this.products);

            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        },
        addToCart(product) {
            if (!product) {
                console.error('No product provided to add to cart');

                return;
            }
            if (this.checkItemInCart(product.id)) {
                console.log('Product already in cart');
                this.incremnetQuantity(product.id);
                this.totalCost += product.price; // Update total cost when quantity increases

                return;
            } else {
                product.quantity = 1;
                this.cart.push(product);
                this.totalCost += product.price; // Update total cost when a new product is added
                console.log(this.cart);
                console.log(this.totalCost);

            }
        },
        checkItemInCart(productId) {
            return this.cart.some(item => item.id === productId);
        },
        incremnetQuantity(productId) {
            const item = this.cart.find(item => item.id === productId);
            if (item) {
                item.quantity += 1;
                console.log(this.totalCost);
            }
        },
        decrementQuantity(productId) {
            const item = this.cart.find(item => item.id === productId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                this.totalCost -= item.price; // Update total cost when quantity decreases
                console.log(this.totalCost);

            }
        }

    },
})