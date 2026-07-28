<script setup>
import { ref } from "vue";
import axios from "axios";
import { mainStore } from "@/stores/mainStore";
import { adminStore } from "@/stores/adminStore";

import removeBg from "./removeBg.vue";

const store = mainStore();
const SellerStore = adminStore();

const product_name = ref("");
const product_barcode = ref("");
const description = ref("");
const stock = ref("");

const price = ref("");
const sale_price = ref("");
const discounted_price = ref("");
const product_image = ref(null); // will hold the File object

function onImageChange(e) {
  product_image.value = e.target.files[0];
  console.log(product_image.value);
}

async function createProduct() {
  try {
    const formData = new FormData();
    formData.append("name", product_name.value.toUpperCase());
    formData.append("description", description.value);

    formData.append("bar_code", product_barcode.value);
    formData.append("stock", stock.value);
    formData.append("stock_balance", stock.value);
    formData.append("price", price.value);
    formData.append("discounted_price", discounted_price.value);
    formData.append("sale_price", sale_price.value);

    formData.append("companyId", SellerStore.company.id);
    if (store.removedBgImage) {
      formData.append("images", store.removedBgImage);
    }
    if (product_image.value) {
      formData.append("images", product_image.value);
    }
    console.log(product_barcode.value);

    const res = await axios.post(`${store.api}/products`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Baerer ${store.token}`,
      },
    });
    console.log("Product created:", res.data);

    // reset form
    product_name.value = "";
    product_barcode.value = "";
    description.value = "";
    stock.value = "";
    price.value = "";
    product_image.value = null;
    store.setNotification(`Mahsulot yaratildi `, "success");
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
        name="barcode"
        id="barcode"
        placeholder="Mahsulot bar kodi"
        v-model="product_barcode"
      />
      <textarea
        id="description"
        name="description"
        rows="4"
        cols="2"
        placeholder="Mahsulot haqida..."
        v-model="description"
      ></textarea>

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
      <input
        type="number"
        name="sale_price"
        id="sale_price"
        placeholder="Mahsulot sotuv narxi"
        v-model="sale_price"
      />
      <input
        type="number"
        name="discounted_price"
        id="discounted_price"
        placeholder="Mahsulot chegirma narxi"
        v-model="discounted_price"
      />

      <span>
        <remove-bg />

        <input
          type="file"
          @change="onImageChange"
          placeholder="Mahsulot rasmi"
        />
      </span>
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
textarea {
  margin: 10px;
  height: 60px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
