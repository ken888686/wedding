<template>
  <Banner />
  <Navbar />
  <router-view />
</template>

<script>
import Banner from '@/components/Banner.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Banner, Navbar },
  data() {
    return { title: 'Home' };
  },
};
</script>
<style lang="scss"></style>
