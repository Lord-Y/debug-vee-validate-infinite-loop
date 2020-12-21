import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ok',
    name: 'Ok',
    component: () => import('../views/NoInfiniteLoop.vue'),
  },
  {
    path: '/nok',
    name: 'Nok',
    component: () => import('../views/InfiniteLoop.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
