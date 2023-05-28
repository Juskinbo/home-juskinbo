import { createApp } from "vue";
import App from "./App.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createRouter, createWebHistory } from "vue-router";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./components/mainComponent.vue"),
    },
    {
      path: "/friends",
      component: () => import("./components/friendsComponent.vue"),
      meta: {
        keepAlive: true,
      }
    },
  ],
});
app.use(router);
app.mount("#app");
