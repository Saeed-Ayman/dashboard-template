import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import FontAwesomeIcon from "./fontawesome.js";
import { router } from "./routes/index.js";

const app = createApp(App);

app.component("icon", FontAwesomeIcon);
app.use(router);

app.config.globalProperties.importImg = (imgUrl) =>
  new URL(`./assets/images/${imgUrl}`, import.meta.url).href;

app.mount("#app");
