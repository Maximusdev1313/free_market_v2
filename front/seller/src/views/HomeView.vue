<script setup>
import creatingCompany from "../components/creating/creatingCompany.vue";
import { mainStore } from "@/stores/mainStore";
const store = mainStore();
</script>

<template>
  <main>
    <button @click="store.logout()">chiqish</button>
    <creating-company />
  </main>
</template>
