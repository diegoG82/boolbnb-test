import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("./pages/HomePage.vue"),
    },
    {
      path: "/Searchpage",
      name: "searchpage",
      component: () => import("./pages/SearchPage.vue"),
    },
    // {
    //   path: "/apartments/:slug",
    //   name: "single-project",
    //   component: () => import("./pages/SingleApartmentPage.vue"),
    // },
    
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "not-found",
    //   component: () => import("./pages/NotFound.vue"),
    // },
  ],
});

export { router };