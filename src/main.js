import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
  extend,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
setInteractionMode('lazy');

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
