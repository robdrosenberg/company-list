import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Edit from './views/Edit.vue';
import Company from './views/Company.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
      props: (route) => ({ query: route.query.q }),
    },
    {
      path: '/company/:id',
      name: 'company',
      component: Company,
      props: (route) => ({ query: route.query.q }),
    },
  ],
});
