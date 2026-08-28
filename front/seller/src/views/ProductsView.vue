<script setup>
import creatingProduct from "../components/creating/creatingProduct.vue";
import searchProduct from "../components/creating/searchProduct.vue";
import productsList from "../components/productsList.vue";
</script>
<template>
  <div class="container">
    
    <div>
      <search-product />
      <creating-product />
      <products-list />
    </div>
  </div>
</template>
