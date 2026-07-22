<script setup>
import { onBeforeMount } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { mainStore } from "@/stores/mainStore";
import { adminStore } from "@/stores/adminStore";
import notificationComponent from "./components/notificationComponent.vue";

const store = mainStore();
const sellerStore = adminStore();

onBeforeMount(() => {
  store.setAuthHeader();
  sellerStore.getCompany();
});
</script>

<template>
  <div>
    <notification-component />
    <div class="container">
      <nav>
        <div class="logo">
          <!-- <img src="" alt="" /> -->
          <!-- {{ sellerStore.company }} -->
          <span v-if="sellerStore.company">
            {{ sellerStore?.company?.name }}
          </span>
        </div>
        <ul class="nav-manu">
          <li><a href="/">Bosh sahifa</a></li>
          <li><a href="/products">Mahsulotlar</a></li>
          <li>
            <a href="/">About</a>
          </li>
          <li><a href="/" @click="store.logout()">chiqish</a></li>
        </ul>
      </nav>
      <RouterView class="view" />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: auto;
}
nav {
  width: 100%;
  height: 70px;
  background-color: rgb(78, 79, 79);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  left: 0;
  top: 0;
}
ul {
  list-style: none;
  display: flex;
}
ul > li {
  margin: 5px;
}
.view {
  margin-top: 80px;
}
</style>
