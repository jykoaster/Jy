import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw, START_LOCATION } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Index', component: () => import('@/views/index.vue') },
  {
    path: '/portfolio/:id',
    name: 'Portfolio',
    component: () => import('@/views/portfolio.vue'),
  },
  {
    path: '/404',
    name: 'PageNotExist',
    component: () => import('@/views/pageNotExist.vue'),
  },
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/404',
  },
]

const options: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (from === START_LOCATION) {
      window.location.hash = ''
      return { top: 0 }
    }
    if (to.hash) {
      return { el: to.hash, top: 96, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
}

const router: Router = createRouter(options)

export default router
