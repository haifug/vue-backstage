
import Vue from 'vue'

import '../theme/index.css';
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import App from './App'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
