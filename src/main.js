import { createApp } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
import App from "./App.vue";
import router from "./router";

import "./assets/all.scss";
import "bootstrap";

createApp(App)
  .use(router)
  .component("BootstrapIcon", BootstrapIcon)
  .mount("#app");
