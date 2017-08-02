import Vue from 'vue';
import Main from './AppMain';
// import App from './app';
// import mdCore from './components/core';
import router from './router';
import store from './store';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import Alert from '@/plugins/AlertPlugin';
import Confirm from '@/plugins/Confirm';
Vue.use(VueMaterial);
Vue.use(Alert);
Vue.use(Confirm);

new Vue({ // eslint-disable-line
  el: '#app',
  store,
  router,
  render: h => h(Main)
});
