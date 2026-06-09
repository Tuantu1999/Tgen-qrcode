/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Styles
import "unfonts.css";
import rules from "./plugins/rules.js";
import router from "./router/index.ts";

const app = createApp(App);
app.use(router);
registerPlugins(app);
app.config.globalProperties.$rules = rules;
app.mount("#app");
