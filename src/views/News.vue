<script setup></script>

<template>
  <div class="container pt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
        <li class="breadcrumb-item">
          <router-link to="/news">最新消息</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">最新公告</li>
      </ol>
    </nav>
  </div>
</template>

<style  scoped>
</style>