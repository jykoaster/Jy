import {
  createRouter,
  createWebHistory,
  RouterOptions,
  Router,
  RouteRecordRaw,
} from "vue-router";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)
const routes: RouteRecordRaw[] = [
  { path: "/", name: "Index", component: () => import("@/views/index.vue") },
  {
    path: "/portfolio/:id",
    name: "Portfolio",
    component: () => import("@/views/portfolio.vue"),
  },
  {
    path: "/404",
    name: "PageNotExist",
    component: () => import("@/views/pageNotExist.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const options: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (!to.hash) {
      gsap.to(window, {
        duration: 0.6,
        scrollTo: 0,
        ease: "power2.inOut",
        overwrite: true,
      });
    }
    return false;
  },
};

const router: Router = createRouter(options);

export default router;
