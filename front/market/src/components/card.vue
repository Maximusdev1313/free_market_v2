<script setup>
import { apiStore } from '@/stores/apiStore'
const store = apiStore()

const baseImageURL = 'http://localhost:3000'
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="product-image">
        <div class="discount-persent">15%</div>
        <img :src="baseImageURL + product.images[0].url" alt="product" />
      </div>

      <div class="product-info">
        <p>
          <a href="/">{{ product.company.name }}</a>
        </p>
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-description">
          {{ product.description }}
        </p>
        <p class="product-price">${{ product.price.toFixed(2) }}</p>
        <p class="product-discount-price">${{ product.price.toFixed(2) }}</p>
      </div>
      <button type="button" @click="store.addToCart(product)">
        <i class="fa-solid fa-cart-arrow-down"></i>
        <span class="" v-if="product.quantity">{{ product.quantity }}</span>
        <span class="" v-else>add to cart</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 250px;
  margin: 10px;
}
.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.product-image {
  position: relative;
  text-align: center;
  padding: 10px;
}
.product-image img {
  max-width: 100%;
  height: 200px;
}
.discount-persent {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: red;
  color: white;
  padding: 5px;
  font-size: 12px;
  border-radius: 3px;
}
.product-info {
  padding: 10px;
}
.product-name {
  font-size: 18px;
  margin: 10px 0;
  max-width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.product-description {
  font-size: 14px;

  max-width: 90%;
  overflow: hidden;

  display: -webkit-box;
  -webkit-box-orient: vertical;

  line-height: 1.4;
  max-height: calc(1.4em * 3);
}

.product-price {
  font-size: 16px;
  font-weight: bold;
}
.product-discount-price {
  font-size: 14px;
  color: #888;
  text-decoration: line-through;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
}
button i {
  margin-right: 5px;
}
button:hover {
  background-color: #218838;
}
</style>
