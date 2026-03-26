<script setup>
import { apiStore } from '@/stores/apiStore'
const store = apiStore()
</script>
<template>
  <div class="cart">
    <div class="cart-items">
      <div class="cart-item" v-for="item in store.cart" :key="item.id">
        <img :src="item.image" class="item-image" />

        <div class="item-info">
          <h3>{{ item.title }}</h3>

          <span class="delivery"><i class="fa-solid fa-truck"></i> Ertaga yetkazamiz</span>
          <span>{{ item.price }} so'm</span>

          <div class="actions">
            <div class="qty-control">
              <button @click="store.decrease(item.id)">−</button>
              <span>{{ item.quantity }}</span>
              <button @click="store.increase(item.id)">+</button>
            </div>

            <button class="delete" @click="store.remove(item.id)">
              <i class="fa-solid fa-trash"></i>
            </button>

            <span class="price"> {{ (item.price * item.quantity).toFixed(0) }} so'm </span>
          </div>
        </div>
      </div>
    </div>

    <!-- RIGHT SIDE -->

    <div class="total-info">
      <h2>Jami</h2>

      <div class="total">{{ store.totalCost }} so'm</div>

      <button class="checkout">Buyurtma berish</button>
    </div>
  </div>
</template>
<style scoped>
.cart {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

/* LEFT */

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.cart-item {
  display: flex;
  gap: 14px;
  background: white;
  padding: 14px;
  border-radius: 14px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.item-image {
  width: 90px;
  height: 90px;
  border-radius: 10px;
  object-fit: cover;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.item-info h3 {
  margin: 0;
  font-size: 15px;
}

/* DELIVERY */

.delivery {
  font-size: 12px;
  background: #e6f7ec;
  color: #28a745;
  padding: 4px 8px;
  border-radius: 6px;
  width: fit-content;
}

/* ACTIONS */

.actions {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

/* QTY */

.qty-control {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 4px;
}

.qty-control button {
  border: none;
  background: #28a745;
  color: white;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  cursor: pointer;
}

.qty-control span {
  min-width: 20px;
  text-align: center;
  font-weight: 600;
}

/* DELETE */

.delete {
  border: none;
  background: #f3f3f3;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
}

/* PRICE */

.price {
  font-weight: 700;
  color: #28a745;
}

/* RIGHT PANEL */

.total-info {
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  position: sticky;
  top: 20px;
  height: fit-content;
}

.total-info h2 {
  text-align: center;
}

.total {
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin: 16px 0;
}

/* CHECKOUT */

.checkout {
  width: 100%;
  border: none;
  padding: 14px;
  border-radius: 12px;
  background: linear-gradient(135deg, #28a745, #5dd879);
  color: white;
  font-size: 16px;
  cursor: pointer;
}

/* MOBILE */

@media (max-width: 800px) {
  .cart {
    grid-template-columns: 1fr;
  }

  .total-info {
    position: relative;
  }
}
</style>
