<script setup>
</script>

<template>
  <footer class="d-flex py-3 px-4">
    <div class="d-flex flex-column me-auto">
      <img src="/img/logo.svg" alt="logo" />
      <span class="text-dark">©2021 , Taiwan Bike. All Rights Reserved.</span>
    </div>
    <div class="d-flex">
      <ul class="list-unstyled ps-5">
        <li class="pb-3 fw-bold">最新消息</li>
        <li class="pb-3 fw-normal">
          <router-link to="/news" class="text-decoration-none link-dark">
            最新公告
          </router-link>
        </li>
        <li class="pb-3 fw-normal">
          <router-link to="/activities" class="text-decoration-none link-dark">
            活動資訊
          </router-link>
        </li>
      </ul>
      <ul class="list-unstyled ps-5">
        <li class="pb-3 fw-bold">自行車路線</li>
        <li class="pb-3 fw-normal">
          <router-link to="/bike-map" class="text-decoration-none link-dark">
            自行車路線
          </router-link>
        </li>
      </ul>
      <ul class="list-unstyled ps-5">
        <li class="pb-3 fw-bold">單車租借</li>
        <li class="pb-3 fw-normal">
          <router-link to="/bike-rent" class="text-decoration-none link-dark">
            單車租借
          </router-link>
        </li>
      </ul>
      <ul class="list-unstyled ps-5">
        <li class="pb-3 fw-bold">騎乘小叮嚀</li>
        <li class="pb-3 fw-normal">
          <router-link to="#" class="text-decoration-none link-dark">
            騎乘小叮嚀
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style>
</style>
