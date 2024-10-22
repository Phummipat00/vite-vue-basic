<!-- src/App.vue -->
<template>
  <div class="app">
    <!--<NavBar />-->
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue';

export default {
  components: {
    NavBar,
    Header,
    Footer
  }
}
</script>

<style>
.app {
  font-family: 'Arial, sans-serif';
  background-color: #f8f8f8;
  color: #333;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
}

main {
  padding: 20px 40px;
}
</style>
