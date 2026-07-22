<script setup>
import creatingCompany from "../components/creating/creatingCompany.vue";
import { mainStore } from "@/stores/mainStore";
import { adminStore } from "@/stores/adminStore";
import { onBeforeMount } from "vue";
const store = mainStore();
const sellerStore = adminStore();

onBeforeMount(() => {
  sellerStore.getCompany();
});
</script>

<template>
  <main>
    <!-- <button @click="store.logout()">Chiqish</button> -->
    <div v-if="!sellerStore.company">
      <creating-company />
    </div>
  </main>
</template>
<style scoped>
main {
  margin-top: 100px;
}
</style>
