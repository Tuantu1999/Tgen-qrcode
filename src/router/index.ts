import MainScreen from "@/components/MainScreen.vue";
import QRStore from "@/components/QRStore.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/Tgen-qrcode/",
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
  history: createWebHistory(),
  routes,
});

export default router;
