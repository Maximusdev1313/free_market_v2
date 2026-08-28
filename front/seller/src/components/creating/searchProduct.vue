<script setup>
import { ref } from "vue";
import { mainStore } from "@/stores/mainStore";
import axios from "axios";
const store = mainStore();

const barCode = ref("");
const products = ref([]);

const searchProducts = async () => {
  try {
    const response = await axios.get(`${store.api}/products/${barCode.value}`);
    products.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <input type="text" v-model="barCode" @keypress.enter="searchProducts()" />
  </div>
</template>
