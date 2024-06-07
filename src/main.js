import "./style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./plugins/i18n";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { MotionPlugin } from "@vueuse/motion";
import eventBus from "vue3-eventbus";
import router from "./router";

import App from "./App.vue";
import "./plugins/axios";
import motionOptions from "./plugins/vuemotion";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(i18n);
app.use(eventBus);
app.use(MotionPlugin, motionOptions);
app.use(autoAnimatePlugin);

app.mount("#app");
