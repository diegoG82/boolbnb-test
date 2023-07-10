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
      path: "/Apartments",
      name: "apartments",
      component: () => import("./pages/ApartmentsPage.vue"),
    },
    {
      path: "/Singleapartments",
      name: "singleapartment",
      component: () => import("./pages/SingleApartment.vue"),
    },
    {
      path: "/Ourteams",
      name:"ourteams",
      component: () => import("./pages/OurTeam.vue"),
    }
    
  ],
});

export { router };