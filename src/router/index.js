import { createRouter, createWebHistory } from 'vue-router';
import Counter from '../views/CounterApp.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
   {
      path: '/',
      name: 'Counter',
      component: Counter,
   },
   {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
