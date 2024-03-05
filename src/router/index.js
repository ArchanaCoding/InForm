import { createRouter, createWebHistory } from 'vue-router';
import Form from '@/components/Form.vue';
import DataDisplay from '@/components/DataDisplay.vue';

const routes = [
  { path: '/', component: Form },
  { path: '/display-data', component: DataDisplay }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Form from '@/components/Form.vue'
// import DataDisplay from '@/components/DataDisplay.vue'

// Vue.use(VueRouter)

// const routes = [
//   { path: '/', component: Form },
//   { path: '/display-data', component: DataDisplay }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router

