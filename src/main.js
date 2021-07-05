import { createApp } from "vue";
import App from "./Main.vue";
//import i18n from "./lang/i18n.js";
import store from "./store";
import { makeMockServer } from "./mock-server/server";
import "./assets/reset.css";
import "./main.css";

if (import.meta.env.DEV) makeMockServer({ environment: "development" });

const app = createApp(App);
//app.use(i18n);
app.use(store);
app.mount("#app");
