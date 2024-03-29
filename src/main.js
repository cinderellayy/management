// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ant from 'ant-design-vue'
import Router from 'vue-router'
import 'ant-design-vue/dist/antd.css'
import '@/assets/css/reset.css'
import '@/assets/css/style.css'
Vue.use(ant)
Vue.config.productionTip = false
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
