<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg py-0 sticky-top bg-white shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand p-0" href="#">
        <img src="img/logo.svg" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-2 dropdown">
            <a
              class="
                nav-link
                link-dark
                border-bottom border-2 border-primary
                px-0
              "
              href="#"
              id="newsDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              最新消息
            </a>
            <ul
              class="
                dropdown-menu dropdown-menu-primary
                start-50
                translate-middle-x
                mt-2
              "
              aria-labelledby="newsDropdownMenuLink"
            >
              <li><a class="dropdown-item" href="#">最新公告</a></li>
              <li class="dropdown-item"><div class="divider"></div></li>
              <li><a class="dropdown-item" href="#">活動資訊</a></li>
            </ul>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link link-dark px-0" href="#">自行車路線</a>
          </li>
          <li class="nav-item mx-2 dropdown">
            <a
              class="
                nav-link
                link-dark
                border-bottom border-2 border-primary
                px-0
              "
              href="#"
              id="bikeRentDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              單車租借
            </a>
            <ul
              class="
                dropdown-menu dropdown-menu-primary
                start-50
                translate-middle-x
                mt-2
              "
              aria-labelledby="bikeRentDropdownMenuLink"
            >
              <li><a class="dropdown-item" href="#">單車租借</a></li>
            </ul>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link link-dark px-0" href="#">騎乘小叮嚀</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
