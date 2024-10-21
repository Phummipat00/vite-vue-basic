<!-- src/components/NavBar.vue -->
<template>
    <nav class="navbar">
      <div class="logo">
        <img src="https://example.com/logo.png" alt="Logo" />
      </div>
      <ul class="nav-links">
        <li><router-link to="/menu">Cake</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0a5c25;
    padding: 10px 20px;
    color: white;
  }
  
  .logo img {
    height: 40px;
  }
  
  .nav-links {
    display: flex;
    gap: 15px;
    list-style: none;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
  }
  
  .nav-links a:hover {
    background-color: white;
    color: #d32323;
  }
  </style>
  