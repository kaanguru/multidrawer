import Vue from 'nativescript-vue'
import App from './components/App.vue'

import store from './store'
import VueDevtools from 'nativescript-vue-devtools'
import MultiDrawer from 'nativescript-vue-multi-drawer'
if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
// Prints Colored logs when --env.production is *NOT* set while building
// @ts-ignore
Vue.config.debug = (TNS_ENV !== 'production')

Vue.use(MultiDrawer)

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
