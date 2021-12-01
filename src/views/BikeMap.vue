<script setup>
import Header from "@/components/Header.vue";
import { ref } from "vue";
import TwCitySelector from "tw-city-selector";
import locationData from "@/assets/position-coordinate.json";

// const center = ref([
//   average(121.509912913931 + 121.511369350755) ,
//   average(25.028756758486 + 25.0280592442443) ,
// ]);

// 臺灣地理中心
let center = ref([120.9738819, 23.97565]);
const projection = ref("EPSG:4326");
let zoom = ref(8);
const rotation = ref(0);
const strokeWidth = ref(7);
const strokeColor = ref("#0d706d");

let county = ref("");
let district = ref("");
let keyword = ref("");

function search() {
  let currentLocation = locationData.filter(
    (item) => item.districtName === `${county.value}${district.value}`
  )[0];
  center.value = [currentLocation.lng, currentLocation.lat];
  zoom.value = 15;
}

// 平均值
function average(num1, num2) {
  return Math.abs(num1 + num2) / 2;
}

new TwCitySelector({
  el: ".city-selector",
  standardWords: true,
  elCounty: ".county",
  countyValue: "臺北市",
  elDistrict: ".district",
  districtValue: "中正區",
  districtClassName: "test",
});
</script>

<template >
  <div class="d-flex flex-column vh-100">
    <Header />
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      class="flex-grow-1 position-relative"
    >
      <form
        class="
          row
          gy-3
          flex-column
          bg-white
          rounded-3
          shadow
          position-absolute
          fw-bold
          p-3
          justify-content-center
        "
        style="z-index: 1; width: 376px"
      >
        <div class="col-auto">
          <h4 class="fw-bold" :style="strokeColor">路線搜尋</h4>
        </div>
        <div class="col-auto mt-0">
          <input
            type="text"
            class="form-control"
            id="keywordFormControlInput"
            placeholder="請輸入路線關鍵字"
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
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
      />
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>

      <ol-vector-layer>
        <ol-source-vector>
          <ol-feature>
            <ol-geom-line-string
              :coordinates="[
                [121.509912913931, 25.028756758486],
                [121.510477519076, 25.0284152910771],
                [121.51079469045, 25.0282542774018],
                [121.511369350755, 25.0280592442443],
              ]"
            ></ol-geom-line-string>
            <ol-style>
              <ol-style-stroke
                :color="strokeColor"
                :width="strokeWidth"
              ></ol-style-stroke>
            </ol-style>
          </ol-feature>
        </ol-source-vector>
      </ol-vector-layer>
    </ol-map>
  </div>
</template>
<style scoped>
form {
  top: 30px;
  left: 30px;
}
</style>