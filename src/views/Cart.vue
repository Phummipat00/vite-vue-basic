<!-- src/views/Cart.vue -->
<template>
    <div class="cart">
      <h1>Your Shopping Cart</h1>
      <div v-if="cart.items.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <div class="cart-item" v-for="item in cart.items" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>Price: {{ item.price }} ฿</p>
          <p>Quantity: {{ item.quantity }}</p>
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
        <button @click="clearCart">Clear Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  import { cart } from '../store/cart'
  
  export default {
    computed: {
      cart() {
        return cart
      }
    },
    methods: {
      removeFromCart(productId) {
        cart.removeFromCart(productId)
      },
      clearCart() {
        cart.clearCart()
      }
    }
  }
  </script>
  
  <style scoped>

  </style>
  