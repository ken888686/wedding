<script setup>
import axios from "axios";
import jsSHA from "jssha";
import moment from "moment";
import { onMounted, ref } from "@vue/runtime-core";

const url =
  "https://ptx.transportdata.tw/MOTC/v2/PTX/Web/News?$filter=NewsCategory%20%20eq%201&$orderby=UpdateTime%20desc&$top=5&$format=JSON";
const appId = "89addd4fa214427d9c23dc4f66699d02";
const appKey = "j8SMq9XgELj2lAfJhSs87abLuKs";

let newsList = ref([]);

const getAuthorizationHeader = function () {
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(appKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    appId +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
};

function getNews() {
  axios.get(url, { headers: getAuthorizationHeader() }).then((res) => {
    let temp = res.data.Newses.map((item) => {
      return {
        category: item.Title.split("】")[0].substring(1),
        title: item.Title.split("】")[1],
        publishTime: moment(item.PublishTime).format("YYYY / MM / DD"),
      };
    });
    newsList.value = temp;
  });
}

onMounted(() => {
  // getNews();
});
</script>
<template>
  <div class="d-flex flex-column border-0">
    <table class="table hover-custom">
      <tbody>
        <tr class="position-relative align-middle" v-for="news in newsList">
          <td class="text-muted py-4">{{ news.category }}</td>
          <td class="text-muted">{{ news.publishTime }}</td>
          <td>
            <a href="#" class="stretched-link text-decoration-none">
              {{ news.title }}
            </a>
          </td>
          <td>
            <BootstrapIcon icon="chevron-right" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>