import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      alias: "/vetements",
      name: "vetements",
      component: () => import("./components/VetementsList.vue"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddVetement.vue"),
    },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
  