import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/category",
    name: "Category",
    meta: {
      layout: "main-layout"
    },
    component: () => import("@/views/Category.vue")
  },
  {
    path: "/detail",
    name: "Detail",
    meta: {
      layout: "main-layout"
    },
    component: () => import("@/views/Detail.vue")
  },
  {
    path: "/history",
    name: "History",
    meta: {
      layout: "main-layout"
    },
    component: () => import("@/views/History.vue")
  },
  {
    path: "/planning",
    name: "Planning",
    meta: {
      layout: "main-layout"
    },
    component: () => import("@/views/Planning.vue")
  },
  {
    path: "/record",
    name: "Record",
    meta: {
      layout: "main-layout"
    },
    component: () => import("@/views/Record.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      layout: "main-layout"
    },
    component: () => import("@/views/Profile.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth-layout"
    },
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth-layout"
    },
    component: () => import("@/views/Register.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
