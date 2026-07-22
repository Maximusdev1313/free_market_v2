<script setup>
import { ref } from "vue";
import { mainStore } from "@/stores/mainStore";

const store = mainStore();

const name = ref("");
const password = ref("");
const email = ref("");
const confPassword = ref("");

const handleRegister = async () => {
  if (password.value === confPassword.value) {
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
      role: "VENDOR",
    };

    await store.register(data);
  } else {
    store.setNotification("Parol bir xil emas!", "error");
    confPassword.value = "";
  }
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="handleRegister">
      <div class="inputs">
        <div class="title">Ro'yxatdan o'tish</div>
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

        <label for="password">Parolni takrorlang</label>
        <input
          type="password"
          id="confpassword"
          v-model="confPassword"
          required
        />
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
        <div class="subtitle">
          Agar hisob mavjud bo'lsa
          <button
            type="button"
            class="subtitle-button"
            @click="store.isLogin = true"
          >
            hisobga kirish
          </button>
        </div>
        <button type="submit">Tasdiqlash</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(48, 49, 49);
  padding: 50px 50px;
  border-radius: 15px;
}

.title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
.inputs {
  width: 90%;
  height: auto;

  display: flex;

  flex-direction: column;
}
label {
  margin-top: 10px;
}
button {
  margin-top: 20px;
}
.subtitle {
  font-size: 12px;
  margin-top: 5px;
}
.subtitle-button {
  background-color: transparent;
  margin: 0;
  padding: 0;
  display: inline;
}
</style>
