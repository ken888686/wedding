<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "./components/Header.vue";
// import Banner from "./components/Banner.vue";
// import Buttons from "./components/Buttons.vue";
// import News from "./components/News.vue";
// import Activities from "./components/Activities.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <!-- <Banner />
  <div class="container">
    <Buttons />
    <News />
    <Activities />
  </div> -->
  <router-view />
  <Footer />
</template>

<style>
</style>
