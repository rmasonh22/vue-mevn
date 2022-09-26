import Vue from "vue";
import VueRouter from "vue-router";
//import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('../components/CreateComponent.vue'),
  },
  {
    path: "/view",
    name: "view",
    component: () => import('../components/ListComponent.vue'),
  },
  {
    path: "/edit/", // add /:id when component built
    name: "edit",
    component: () => import('../components/ListComponent.vue'),
  }


];

const router = new VueRouter({
  routes,
});

export default router;
