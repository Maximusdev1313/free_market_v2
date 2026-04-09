<script setup>
import { ref } from "vue";
import axios from "axios";
import { mainStore } from "@/stores/mainStore";
const store = mainStore();
const company_name = ref("");
const address = ref("");

const creatingCompany = async () => {
  const data = {
    name: company_name.value,
    address: address.value,
    location: "40.325029, 71.825782",
  };
  try {
    const response = await axios.post(store.api + "/companies", data, {
      headers: {
        Authorization: `Baerer ${store.token}`,
      },
    });
    console.log(response.data);
    console.log(data, "i");
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="company">
    company
    <div class="inputs">
      <div class="input_container">
        <label for="company_name">Your company name:</label> <br />
        <input
          type="text"
          name="company_name"
          id="company_name"
          v-model="company_name"
        /><br />
      </div>
      <label for="address">Your company address:</label><br />
      <input type="text" name="address" id="address" v-model="address" /> <br />
      <button type="button" @click="creatingCompany()">Create</button>
    </div>
  </div>
</template>

<style scoped>
.company {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.company > * {
  padding: 20px 0;
}
</style>
