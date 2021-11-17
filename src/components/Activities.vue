<script setup>
import axios from "axios";
import jsSHA from "jssha";
import moment from "moment";
import { onMounted, ref } from "@vue/runtime-core";

const url =
  "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$orderby=SrcUpdateTime%20desc&$top=5&$format=JSON";
const AppID = "89addd4fa214427d9c23dc4f66699d02";
const AppKey = "j8SMq9XgELj2lAfJhSs87abLuKs";

const getAuthorizationHeader = function () {
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
};

let activitiesList = ref([]);

function getActivities() {
  axios.get(url, { headers: getAuthorizationHeader() }).then((res) => {
    let temp = res.data.map((item) => {
      return {
        category: item.Class1,
        title: item.ActivityName,
        startTime: moment(item.StartTime).format("YYYY / MM / DD"),
        publishTime: moment(item.SrcUpdateTime).format("YYYY / MM / DD"),
      };
    });
    activitiesList.value = temp;
  });
}

onMounted(() => {
  getActivities();
});
</script>
<template>
  <div class="d-flex flex-column border-0 py-5">
    <h2 class="h2 fw-bold mb-5 text-center">近期活動</h2>
    <table class="table hover-custom">
      <tbody>
        <tr
          class="position-relative align-middle"
          v-for="item in activitiesList"
        >
          <td class="text-muted py-4">{{ item.category }}</td>
          <td class="text-muted">{{ item.startTime }}</td>
          <td>
            <a href="#" class="stretched-link text-decoration-none">
              {{ item.title }}
            </a>
          </td>
          <td><i class="bi bi-chevron-right"></i></td>
        </tr>
      </tbody>
    </table>
    <div class="text-center py-3">
      <a href="#" class="btn btn-primary">更多活動資訊</a>
    </div>
  </div>
</template>
<style></style>