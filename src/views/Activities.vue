<script setup>
import ActivitiesList from "../components/ActivitiesList.vue";
</script>

<template>
  <div class="container pt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" class="link-light text-decoration-none">
            首頁
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/news" class="link-light text-decoration-none">
            最新消息
          </router-link>
        </li>
        <li class="breadcrumb-item text-primary" aria-current="page">
          活動資訊
        </li>
      </ol>
    </nav>

    <div class="container">
      <h2 class="h2 fw-bold text-center mb-4">活動資訊</h2>
      <form class="row g-5 mb-5 justify-content-center">
        <div class="col-auto">
          <label for="staticEmail" class="col-form-label">選擇區域</label>
        </div>
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option value="0" selected>全部區域</option>
            <option value="1">緊急通知</option>
            <option value="2">營運資訊</option>
          </select>
        </div>
        <div class="col-auto">
          <label for="staticEmail" class="col-form-label">選擇時間</label>
        </div>
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option value="0" selected>全部年份</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
        <div class="col-auto">
          <button
            type="submit"
            class="btn btn-secondary text-white shadow px-3"
          >
            查詢
          </button>
        </div>
      </form>
      <ActivitiesList />
    </div>
  </div>
</template>

<style scoped>
</style>