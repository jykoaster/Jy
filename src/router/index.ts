import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Index', component: () => import('../views/index.vue') },
  {
    path: '/portfolio/:id',
    name: 'Portfolio',
    component: () => import('../views/portfolio.vue'),
  },
  {
    path: '/404',
    name: 'PageNotExist',
    component: () => import('../views/pageNotExist.vue'),
  },
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/404',
  },
]

const options: RouterOptions = {
  history: createWebHistory('Jy'),
  routes,
}

const router: Router = createRouter(options)

export default router
