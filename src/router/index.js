import VueRouter from "vue-router";
import Vue from "vue";
import HomeComponent from "../components/HomeComponent.vue";
import VideoWatch from "../components/VideoWatch.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
  },

  {
    path: "/video/:id",
    name: "VideoWatch",
    component: VideoWatch,
    params: true,
  },
];
const router = new VueRouter({
  routes,
});

export default router;
