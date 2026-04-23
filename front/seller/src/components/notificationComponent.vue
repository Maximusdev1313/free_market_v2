<script setup>
import { mainStore } from "@/stores/mainStore";
const store = mainStore();
</script>

<template>
  <div class="notification-container">
    <div
      v-for="n in store.notifications"
      :key="n.id"
      class="notification"
      :class="n.type"
    >
      <span>{{ n.message }}</span>
      <button @click="store.removeNotification(n.id)" type="button">✕</button>
    </div>
  </div>
</template>
<style scoped>
.notification-container {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
}

.notification {
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  min-width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  background-color: transparent;
}

/* types */
.notification.info {
  background: #3498db;
}
.notification.success {
  background: #28a745;
}
.notification.error {
  background: #e74c3c;
}
.notification.warning {
  background: #f39c12;
}
</style>
