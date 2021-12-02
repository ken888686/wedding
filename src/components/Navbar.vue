<template>
  <div class="container d-flex justify-content-center align-items-center">
    <router-link :to="item.url" class="btn" v-for="(item, index) in menuList" :key="index">
      <span
        class="py-1"
        :class="{ 'border-bottom border-3 border-primary': $route.path === item.url }"
      >
        {{ item.name }}
      </span>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        { url: '/', name: 'Home' },
        { url: '/our-story', name: 'Our Story' },
        { url: '/photos', name: 'Photos' },
        { url: '/honeymoon', name: 'Honeymoon' },
      ],
    };
  },
  mounted() {},
};
</script>
<style lang="scss" scoped></style>
