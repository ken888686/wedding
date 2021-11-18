<script setup>
import NewsList from "/@/components/NewsList.vue";
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
        <li class="breadcrumb-item active" aria-current="page">
          <router-link
            to="/activities"
            class="link-primary text-decoration-none"
          >
            最新公告
          </router-link>
        </li>
      </ol>
    </nav>

    <div class="container">
      <h2 class="h2 fw-bold text-center mb-4">最新公告</h2>
      <form class="row g-5 mb-5 justify-content-center">
        <div class="col-auto">
          <label for="staticEmail" class="col-form-label">選擇分類</label>
        </div>
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option selected disabled>全部分類</option>
            <option value="1">緊急通知</option>
            <option value="2">營運資訊</option>
          </select>
        </div>
        <div class="col-auto">
          <label for="staticEmail" class="col-form-label">選擇時間</label>
        </div>
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option selected disabled>全部年份</option>
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
      <NewsList />
    </div>
  </div>
</template>

<style  scoped>
</style>