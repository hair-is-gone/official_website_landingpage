import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

var router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: (resolve) => require(["@/components/mobile/GfIndex"], resolve),
    },
    {
      path: "/home",
      name: "home",
      component: (resolve) => require(["@/components/mobile/GfIndex"], resolve),
    },
    {
      path: "/details",
      name: "details",
      component: (resolve) => require(["@/components/mobile/GfIndex"], resolve),
    },
    {
      path: "/apps/details",
      name: "detail",
      component: (resolve) => require(["@/components/mobile/GfIndex"], resolve),
    },
    {
      path: "/store/apps/details",
      name: "detail",
      component: (resolve) => require(["@/components/mobile/GfIndex"], resolve),
    },
  ],
});

export default router;
