// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import DefaultLayout from './components/layouts/DefaultLayout'
import WithSidebarLayout from './components/layouts/WithSidebarLayout'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.component('default-layout', DefaultLayout)
Vue.component('with-sidebar-layout', WithSidebarLayout)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: {App},
  template: '<App/>'
})
