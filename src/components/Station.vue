<script setup>
import TwCitySelector from "tw-city-selector";
import { ref } from "vue";

new TwCitySelector({
  el: ".city-selector",
  standardWords: true,
  elCounty: ".county",
  countyValue: "臺北市",
  elDistrict: ".district",
  districtValue: "中正區",
  districtClassName: "test",
});

let county = ref("");
let district = ref("");
let keyword = ref("");

const props = defineProps({
  title: String,
});

const emits = defineEmits(["parentSearch"]);
function search() {
  emits("parentSearch", county.value + district.value, keyword.value);
  keyword.value = "";
}
</script>
<template>
  <form
    class="
      row
      gy-3
      flex-column
      bg-white
      rounded-3
      shadow
      fw-bold
      p-3
      justify-content-center
    "
    style="z-index: 1; width: 376px"
  >
    <div class="col-auto">
      <h4 class="fw-bold">{{ props.title }}</h4>
    </div>
    <div class="col-auto mt-0">
      <input
        type="text"
        class="form-control"
        id="keywordFormControlInput"
        placeholder="請輸入站牌關鍵字"
        v-model="keyword"
      />
    </div>
    <div class="col-auto">
      <div class="row city-selector">
        <div class="col-5">
          <span>縣市</span>
          <select
            class="county form-select"
            aria-label="縣市"
            v-model="county"
          ></select>
        </div>
        <div class="col-5">
          <span>鄉鎮區</span>
          <select
            class="district form-select"
            aria-label="鄉鎮區"
            v-model="district"
          ></select>
        </div>
      </div>
    </div>
    <div class="col-auto d-grid pb-3">
      <button type="button" class="btn btn-primary" @click="search">
        搜尋
      </button>
    </div>
  </form>
</template>
<style></style>