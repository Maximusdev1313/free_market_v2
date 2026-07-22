<script setup>
import { mainStore } from "@/stores/mainStore";
import { adminStore } from "@/stores/adminStore";
import { ref } from "vue";

import axios from "axios";
const store = mainStore();
const SellerStore = adminStore();
const product_name = ref("");
const stock = ref("");
const price = ref("");
const product_image = ref(null); // will hold the File object

function onImageChange(e) {
  product_image.value = e.target.files[0];
}

async function createProduct() {
  try {
    const formData = new FormData();
    formData.append("name", product_name.value);
    formData.append("stock", stock.value);
    formData.append("price", price.value);

    formData.append("companyId", SellerStore.company.id);

    if (product_image.value) {
      formData.append("images", product_image.value);
    }

    const res = await axios.post(`${store.api}/products`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Baerer ${store.token}`,
      },
    });
    console.log("Product created:", res.data);

    // reset form
    product_name.value = "";
    stock.value = "";
    price.value = "";
    product_image.value = null;
  } catch (err) {
    store.setNotification(err.massage, "error");
    console.error(err.response?.data || err.message);
  }
}
</script>
<template>
  <div class="container">
    Creating Product
    <div class="product-form">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Mahsulot nomi"
        v-model="product_name"
      />
      <input
        type="number"
        name="stock"
        id="stock"
        placeholder="soni"
        v-model="stock"
      />
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Mahsulot narxi"
        v-model="price"
      />

      <input type="file" @change="onImageChange" placeholder="Mahsulot rasmi" />
      <button type="button" @click="createProduct()">Yaratish</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.product-form {
  width: 80%;
  display: flex;
  flex-direction: column;
  column-gap: 10px;
}
input {
  margin: 10px;
  height: 40px;
}
</style>
