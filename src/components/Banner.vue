<template>
  <img
    src="https://media-api.xogrp.com/images/68024316-8d34-48e6-919b-fffdb3b2366b~rt_auto-rs_1440.h?ordering=explicit"
    alt=""
    class="bg-cover w-100 position-absolute"
  />
  <div class="p-4 p-md-5 mb-4">
    <div class="px-0 text-center">
      <h1>{{ title }}</h1>
      <span class="lead my-3">{{ date }}</span>
    </div>
  </div>
</template>
<script>
import Navbar from './Navbar.vue';

export default {
  data() {
    return {
      title: 'Aaron & Annabelle',
      date: 'SEPTEMBER 3, 2021',
    };
  },
  components: {
    Navbar,
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Rochester&display=swap');

h1 {
  font-family: Rochester;
  padding: 0 4% 10px 4%;
  color: #6c7882;
  font-size: 62px;
  font-weight: normal;
  margin: 16px 0;
  padding-bottom: 20px;
}

span {
  line-height: 1;
  font-family: 'Noto Sans';
  letter-spacing: 3px;
  color: #6c7882;
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
  margin: 8px 0;
}

$img-url: 'https://media-api.xogrp.com/images/68024316-8d34-48e6-919b-fffdb3b2366b~rt_auto-rs_1440.h?ordering=explicit';

.bg-cover {
  background-size: auto;
  background-position: top center;
  background-repeat: no-repeat;
  z-index: -1;
}

.space {
  max-width: 100%;
  max-height: 120px;
  margin-bottom: 20px;
  width: 100%;
}
</style>
