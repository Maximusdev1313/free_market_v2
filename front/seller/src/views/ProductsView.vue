<script setup>
import creatingProduct from "../components/creating/creatingProduct.vue";
import { ref, onMounted } from "vue";
import { mainStore } from "@/stores/mainStore";
import { adminStore } from "@/stores/adminStore";

import axios from "axios";
const store = mainStore();
const SellerStore = adminStore();
const products = ref([]);
const gettingProducts = async () => {
  try {
    const response = await axios.get(store.api + "/products/my-company", {
      headers: {
        Authorization: `Bearer ${store.token}`,
      },
    });

    products.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  gettingProducts();
});
</script>
<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <creating-product />
    </div>
  </div>
</template>

<style scoped>
table {
  color: #fff;
  border: 1px solid #fff;
  border-collapse: collapse;
}
th {
  font-weight: bold;
}
th,
td {
  border: 1px solid #fff;
  padding: 0.6em;
}
</style>
