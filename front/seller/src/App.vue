<script setup>
import { onBeforeMount } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { mainStore } from "@/stores/mainStore";
const store = mainStore();

onBeforeMount(() => {
  store.setAuthHeader();
});
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
