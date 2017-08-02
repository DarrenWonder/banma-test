import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/pages/Index';
import List from '@/pages/List';
import Cart from '@/pages/Cart';
import Messages from '@/pages/Messages';
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/',
      component: Index,
      children: [{
        path: '',
        component: List
      }, {
        path: 'cart',
        component: Cart
      }]
    },
    {
      path: '/msg',
      component: Messages
    }
  ]
});
