<script setup>
import { ref } from "vue";
import { mainStore } from "@/stores/mainStore";

const store = mainStore();

const password = ref("");
const email = ref("");

const handleLogin = async () => {
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);

  await store.login(data);
};
</script>

<template>
  <div>
    login
    <div>
      <label for="email">email</label>
      <input type="email" name="email" id="email" v-model="email" />
      <label for="password">Parol</label>
      <input type="password" name="password" v-model="password" />
      <button @click="handleLogin()">Login</button>
    </div>
  </div>
</template>
