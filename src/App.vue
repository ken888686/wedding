<script >
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    Header,
    Footer,
  },
  watch: {
    $route: function () {
      this.isShow = this.$route.path !== "/bike-map";
    },
  },
};
</script>

<template>
  <Header v-if="isShow" />
  <router-view />
  <Footer v-if="isShow" />
</template>

<style>
</style>
