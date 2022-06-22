import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "@/views/Home";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/todos",
      component: () => import("./views/Todos.vue"),
    },
  ],
});

createApp(App).use(router).mount("#app");
