import MainScreen from "@/components/MainScreen.vue";
import QRStore from "@/components/QRStore.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainScreen,
  },
  {
    path: "/qr-store",
    name: "qrStore",
    component: QRStore,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
