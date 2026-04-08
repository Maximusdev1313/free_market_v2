<script setup>
import { ref } from "vue";
import { mainStore } from "@/stores/mainStore";

const store = mainStore();

const name = ref("");
const password = ref("");
const email = ref("");

const handleRegister = async () => {
  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    role: "VENDOR",
  };

  await store.register(data);
};
</script>

<template>
  <div>
    <form @submit.prevent="handleRegister">
      <label for="name">Ismingiz</label>
      <input
        type="text"
        id="name"
        v-model="name"
        autocomplete="username"
        required
      />

      <label for="password">Parol</label>
      <input type="password" id="password" v-model="password" required />

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required />

      <button type="submit">Register</button>
    </form>
  </div>
</template>
