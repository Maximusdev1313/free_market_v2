<script setup>
import loginComponent from "@/components/auth/loginComponent.vue";
import register from "@/components/auth/register.vue";
import creatingCompany from "../components/creating/creatingCompany.vue";
</script>

<template>
  <main>
    <register />
    <loginComponent />
    <creating-company />
  </main>
</template>
