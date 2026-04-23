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
  <div class="container">
    <div class="form">
      <div class="inputs">
        <div class="title">Hisobga kirish</div>
        <label for="email">email</label>
        <input type="email" name="email" id="email" v-model="email" />
        <label for="password">Parol</label>
        <input type="password" name="password" v-model="password" />
        <div class="subtitle">
          Agar hisob mavjud bo'lmasa
          <button
            type="button"
            class="subtitle-button"
            @click="store.isLogin = false"
          >
            hisob yaratish
          </button>
        </div>
        <button @click="handleLogin()">kirish</button>
      </div>
    </div>
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
.form {
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
