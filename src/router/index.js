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
    component: () => import('../components/EditComponent.vue'),
  }


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.Base_URL,
  routes
});

export default router;
