<script setup>
import { onBeforeMount } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { mainStore } from "@/stores/mainStore";
import notificationComponent from "./components/notificationComponent.vue";
const store = mainStore();

onBeforeMount(() => {
  store.setAuthHeader();
});
</script>

<template>
  <div>
    <notification-component />
    <div>
      <RouterView />
    </div>
  </div>
</template>
