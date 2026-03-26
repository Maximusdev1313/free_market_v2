<script setup>
import Card from '@/components/card.vue'
import { onMounted, ref } from 'vue'
import { apiStore } from '../stores/apiStore'

const store = apiStore()
const products = ref([])

onMounted(async () => {
  await store.fetchProducts()
  products.value = store.products
})
</script>

<template>
  <div class="home-view">
    <router-link to="cart">cart</router-link>
    <div class="vertical-container">
      <span>{{ store.totalCost }}</span>
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
<style scoped>
.vertical-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
