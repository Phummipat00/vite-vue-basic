<template>
    <div class="menu">
      <h1>New Available</h1>
      <div class="menu-grid">
        <div class="menu-card" v-for="item in menuItems" :key="item.id">
          <img :src="item.image" alt="Menu item cover" class="menu-image" />
          <div class="menu-content">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <span class="price">{{ item.price }} ฿</span>
            <button class="add-to-cart" @click="addToCart(item)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { cart } from '../store/cart'
  
  // Import all images from the src/img directory
  const images = import.meta.glob('../img/*.jpg');
  
  export default {
    data() {
      return {
        menuItems: [
                { id: 1, name: 'Cake1', description: 'description description', price: 50, image: images['C (2).jpg'] },
                { id: 2, name: 'Cake2', description: 'description description', price: 40, image: images['C (3).jpg'] },
                { id: 3, name: 'Cake3', description: 'description description', price: 30, image: images['C (4).jpg'] },
                { id: 4, name: 'Cake4', description: 'description description', price: 50, image: images['C (5).jpg'] },
                { id: 5, name: 'Cake5', description: 'description description', price: 40, image: images['C (6).jpg'] },
                { id: 6, name: 'Cake6', description: 'description description', price: 30, image: images['C (7).jpg'] },
                { id: 7, name: 'Cake7', description: 'description description', price: 40, image: images['C (8).jpg'] },
                { id: 6, name: 'Cake8', description: 'description description', price: 30, image: images['C (9).jpg'] },
            ]
        }
    },
    methods: {
    addToCart(item) {
      cart.addToCart(item)
      alert(`${item.name} has been added to the cart.`)
    }
  }
}
</script>

<style scoped>
.menu {
    text-align: center;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 30px;
}

.menu-card {
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.menu-card:hover {
    transform: translateY(-5px);
}

.menu-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.menu-content {
    padding: 15px;
    text-align: left;
}

.price {
    display: block;
    font-size: 18px;
    color: #d32323;
    margin: 10px 0;
}

.add-to-cart {
    background-color: #d32323;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.add-to-cart:hover {
    background-color: #a51a1a;
}
</style>