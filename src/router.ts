import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./layouts/base-layout.vue'),
    children: [
      { path: '', component: () => import('./pages/home.vue') },
      {
        path: '/portfolio/:slug',
        component: () => import('./pages/portfolio.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }

    return { top: 0 };
  },
});

export default router;
