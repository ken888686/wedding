<script setup>
import Banner from "/@/components/Banner.vue";
import Buttons from "/@/components/Buttons.vue";
import NewsList from "/@/components/NewsList.vue";
</script>

<template>
  <Banner />
  <div class="container">
    <Buttons />

    <h2 class="h2 fw-bold text-center">最新公告</h2>
    <NewsList />
    <div class="text-center py-3">
      <a href="#" class="btn btn-primary">更多最新公告</a>
    </div>
    <!-- <NewsList />
    <Activities /> -->
  </div>
</template>
<style></style>