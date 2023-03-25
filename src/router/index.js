import { createRouter, createWebHistory } from 'vue-router';
import Counter from '../views/CounterApp.vue';
import NotFound from '../views/NotFound.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
   {
      path: '/',
      name: 'Home',
      component: HomePage,
   },
   {
      path: '/counter',
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
