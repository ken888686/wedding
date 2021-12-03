<template>
  <div class="container-fluid d-flex flex-column justify-content-center px-0 position-relative">
    <img
      src="https://media-api.xogrp.com/images/68024316-8d34-48e6-919b-fffdb3b2366b~rt_auto-rs_1440.h?ordering=explicit"
      alt=""
      class="w-100 position-absolute"
    />
    <h1 class="m-0">{{ title }}</h1>
    <span class="lead my-3">{{ date }}</span>
  </div>
</template>
<script setup>
const title = 'Aaron & Annabelle';
const date = 'SEPTEMBER 3, 2021';
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Rochester&display=swap');

h1 {
  font-family: Rochester;
  font-size: 62px;
  font-weight: normal;
  text-align: center;
}

span {
  line-height: 1;
  font-family: 'Noto Sans';
  letter-spacing: 3px;
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
}

$img-url: 'https://media-api.xogrp.com/images/68024316-8d34-48e6-919b-fffdb3b2366b~rt_auto-rs_1440.h?ordering=explicit';

.bg-cover {
  background-size: auto;
  background-position: top center;
  background-repeat: no-repeat;
  z-index: -10;
}

.space {
  max-width: 100%;
  max-height: 120px;
  margin-bottom: 20px;
  width: 100%;
}
</style>
