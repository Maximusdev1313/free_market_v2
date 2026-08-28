<script setup>
import { ref, onMounted } from "vue";
import { mainStore } from "@/stores/mainStore";
import { adminStore } from "@/stores/adminStore";
import searchProduct from "../components/creating/searchProduct.vue";
import axios from "axios";
const store = mainStore();
const SellerStore = adminStore();
const products = ref([]);

const baseImageURL = "http://localhost:3000";
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
          <th>Rasmi</th>

          <th>Nomi</th>
          <th>Bar code</th>
          <th>Kelgan narxi</th>
          <th>Sotuv narxi</th>
          <th>Chegirma narxi</th>

          <th>Sotildi</th>
          <th>Omborda qolgan</th>
          <th><search-product /></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <img
              :src="baseImageURL + product.images[0]?.url"
              alt="product"
              width="50"
              height="50"
            />
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.bar_code }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.sale_price }}</td>
          <td>
            <span v-if="product.discounted_price">
              {{ product.discounted_price }}
            </span>
            <span v-else>-</span>
          </td>
          <td>{{ product.stock }}</td>
          <td>{{ product.stock_balance }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
}
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
