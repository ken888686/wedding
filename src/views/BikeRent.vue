<script setup>
import Header from "@/components/Header.vue";
import Station from "@/components/Station.vue";
import { ref } from "vue";
import locationData from "@/assets/position-coordinate.json";
import markerIcon from "@/assets/icon/marker-1.svg";

const projection = ref("EPSG:4326");
const rotation = ref(0);

// 臺灣地理中心
let center = ref([120.9738819, 23.97565]);
let zoom = ref(8);

function search(location, keyword) {
  let currentLocation = locationData.filter(
    (item) => item.districtName === location
  )[0];
  center.value = [currentLocation.lng, currentLocation.lat];
  zoom.value = 15;
}
</script>

<template >
  <div class="d-flex flex-column vh-100">
    <Header />
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      class="flex-grow-1 position-relative"
    >
      <Station
        class="position-absolute"
        title="站牌搜尋"
        @parentSearch="search"
      />
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
            <ol-geom-point :coordinates="center"></ol-geom-point>
            <ol-style>
              <ol-style-circle radius="20"></ol-style-circle>
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