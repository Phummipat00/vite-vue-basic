<template>
<div class="container">
    <div class="bg-image">
        <img src="../img/BG.jpg" alt="">
    </div>
    <div class="nav">
        <NavBar />
    </div>
</div>
</template>
<script setup>
import NavBar from './NavBar.vue';

    
</script>
<style>
.nav{
    position: relative;
    bottom: 139vh;
}
.bg-image{
    width: 1440px;
    height: auto;
    overflow: hidden;
}
.bg-image>img{
    width: 100%;
    height: 100%;
}
</style>
