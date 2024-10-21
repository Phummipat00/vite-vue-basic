
import { reactive } from 'vue'

export const cart = reactive({
  items: [],
  
  addToCart(product) {
    const existingItem = cart.items.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.items.push({ ...product, quantity: 1 })
    }
  },

  removeFromCart(productId) {
    const index = cart.items.findIndex(item => item.id === productId)
    if (index !== -1) {
      cart.items.splice(index, 1)
    }
  },

  clearCart() {
    cart.items = []
  }
})
