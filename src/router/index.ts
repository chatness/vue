import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Shell from '../Shell.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/@/home',
  },
  {
    path: '/@/',
    component: Shell,
    children: [
      {
        path: '',
        redirect: '/@/home',
      },
      {
        path: 'home',
        component: () => import('@/pages/Home.vue'),
      },
      {
        path: 'profile',
        component: () => import('@/pages/Profile.vue'),
      },
      {
        path: 'contacts',
        component: () => import('@/pages/Contacts.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
