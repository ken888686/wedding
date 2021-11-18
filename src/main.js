import { createApp } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
import App from "/@/App.vue";
import Router from "/@/router";

import "/@/styles/all.scss";
import "bootstrap";
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/dist/vue3-openlayers.css";

createApp(App)
  .use(Router)
  .use(OpenLayersMap)
  .component("BootstrapIcon", BootstrapIcon)
  .mount("#app");
