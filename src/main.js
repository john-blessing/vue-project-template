// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import VueECharts from 'vue-echarts'
import 'iview/dist/styles/iview.css'
import {
  sync
} from 'vuex-router-sync'
import VueLocalStorage from 'vue-localstorage'
import store from './store';

Vue.use(VueLocalStorage)

Vue.config.productionTip = false

Vue.use(iView);
Vue.component('chart', VueECharts)

sync(store, router)

router.beforeEach((to, from, next) => {
  // 权限控制
  if (to.matched.some(m => m.meta.requiredAuth)) {

  } else {

  }

  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
