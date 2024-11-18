import { register } from "swiper/element/bundle";
register();

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'swiper/swiper-bundle.css'
import "./reset.scss";
import "./theme.scss";

createApp(App).use(router).use(store).mount("#app");
