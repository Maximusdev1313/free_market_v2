<script setup>
import loginComponent from "@/components/auth/loginComponent.vue";
import register from "@/components/auth/register.vue";
import { mainStore } from "@/stores/mainStore";

const store = mainStore();
</script>
<template>
  <div>
    <loginComponent v-if="store.isLogin" />
    <register v-else />
  </div>
</template>
